'use strict';

var _ = require('lodash');

module.exports = function(grunt) {

    var dirConfig = {
        srcDir: 'src',
        buildDir: 'build'
    };

    var taskConfig = {

        pkg: grunt.file.readJSON('package.json'),

        clean: ['<%= buildDir%>'],

        watch: {
            js: {
                files: ['Gruntfile.js', 'server.js', 'app/**/*.js'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public/views/**', 'app/views/**'],
                options: {
                    livereload: true
                }
            }
        }
    };

    // Project Configuration
    grunt.initConfig(_.extend(taskConfig, dirConfig));

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('build', ['clean'])

    grunt.registerTask('default', ['watch']);
};