'use strict';

var _ = require('lodash');

module.exports = function(grunt) {

    // load build config file
    var buildConfig = require('./build.config.js');

    // Grunt config object
    var taskConfig = {

        pkg: grunt.file.readJSON('package.json'),

        clean: [
            '<%= buildDir%>',
            '<%= distDir%>'
        ],

        // handles LESS compilation and uglification
        less: {
            build: {
                files: {
                    '<%= buildDir %>/css/<%= pkg.name %>.css': '<%= clientSrc.less %>'
                }
            },
            dist: {
                files: {
                    '<%= distDir %>/css/<%= pkg.name %>.css': '<%= clientSrc.less %>'
                },
                options: {
                    cleancss: true
                }
            }
        },

        copy: {
            buildFiles: {
                files: [
                    {
                        src: ['<%= clientSrc.html %>'],
                        dest: '<%= buildDir %>',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        }

    };

    // Project Configuration
    grunt.initConfig(_.extend(taskConfig, buildConfig));

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('build', ['clean', 'less:build'])

    grunt.registerTask('default', ['watch']);
};