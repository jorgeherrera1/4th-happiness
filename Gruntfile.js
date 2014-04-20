'use strict';

module.exports = function(grunt) {

    // Grunt config object
    var taskConfig = {

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            public: ['public']
        },

        // handles LESS compilation and uglification
        less: {
            development: {
                files: {
                    'public/css/4th-happiness.css': 'client/less/main.less'
                }
            },
            production: {
                files: {
                    'public/css/4th-happiness.css': 'client/less/main.less'
                },
                options: {
                    cleancss: true
                }
            }
        },

        copy: {
            html: {
                files: [
                    {
                        src: ['*.html', 'views/**/*.html'],
                        dest: 'public',
                        expand: true,
                        cwd: 'client'
                    }
                ]
            },
            images: {
                files: [
                    {
                        src: ['images/*'],
                        dest: 'public',
                        expand: true,
                        cwd: 'client'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        src: ['fonts/*'],
                        dest: 'public',
                        expand: true,
                        cwd: 'client/lib/bootstrap'
                    }
                ]
            },
            lib: {
                files: [
                    {
                        src: [
                            'html5shiv/dist/html5shiv.js',
                            'respond/dest/respond.min.js'
                        ],
                        dest: 'public/js',
                        expand: true,
                        flatten: true,
                        cwd: 'client/lib'
                    }
                ]
            }
        },

        concat: {
            developmentLib: {
                src: [
                    'client/lib/jquery/dist/jquery.js',
                    'client/lib/bootstrap/dist/js/bootstrap.js',
                    'client/lib/angular/angular.js',
                    'client/lib/angular-route/angular-route.js'
                ],
                dest: 'public/js/4th-happiness-lib.js'
            },
            development: {
                src: [
                    'client/js/app.js',
                    'client/js/controllers.js',
                    'client/js/services.js',
                    'client/js/directives.js',
                ],
                dest: 'public/js/4th-happiness.js'
            }
        },

        nodemon: {
            development: {
                script: 'server.js',
                options: {
                    args: [],
                    watch: ['public/**', 'server/**'],
                    ignore: ['node_modules/**'],
                    ext: 'js',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },

        watch: {
            less: {
                files: ['main.less'],
                tasks: ['less:development'],
                options: {
                    cwd: 'client/less',
                    livereload: true
                }
            },
            html: {
                files: ['*.html', 'views/**/*.html'],
                tasks: ['newer:copy:html'],
                options: {
                    cwd: 'client',
                    livereload: true
                }
            },
            js: {
                files: ['*.js'],
                tasks: ['concat:development'],
                options: {
                    cwd: 'client/js',
                    livereload: true
                }
            }
        },

        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }

    };

    // Project Configuration
    grunt.initConfig(taskConfig);

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('development', [
        'clean',
        'copy',
        'less:development',
        'concat:developmentLib',
        'concat:development',
        'concurrent'
    ]);

    grunt.registerTask('default', ['development']);
};