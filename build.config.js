'use strict';

module.exports = {

    // directory where the project is compiled during development
    buildDir: 'build',

    // directory where the project is compiled for production (minified files)
    distDir: 'dist',

    clientSrc: {
        js: ['src/client/app/**/*.js'],
        html: 'src/client/index.html',
        less: 'src/client/less/main.less'
    },

    libDir: {

    }

};