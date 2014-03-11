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

        copy: {

        },

        watch: {
            js: {
                files: [
                    '<%= clientDir.js%>'
                ],
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
    grunt.initConfig(_.extend(taskConfig, buildConfig));

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('build', ['clean'])

    grunt.registerTask('default', ['watch']);
};