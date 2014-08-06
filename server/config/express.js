'use strict';

// Module dependencies
var express = require('express'),
    path = require('path'),
    config = require('./config');

module.exports = function(app) {
    app.configure('development', function(){
        app.use(express.errorHandler());

        // Prettify HTML
        app.locals.pretty = true;

        // Only use logger for development environment
        app.use(express.logger('dev'));
    });

    // set .html as the default extension
    app.set('view engine', 'html');

    app.configure(function() {
        // Request body parsing middleware should be above methodOverride
        app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.methodOverride());

        // Routes should be at the last
        app.use(app.router);

        require(path.join(config.root, '/server/models/questions'));
        require(path.join(config.root, '/server/routes/questions'))(app);

        // Setting the fav icon and static folder
        app.use(express.favicon());
        app.use(express.static(path.join(config.root, '/public')));
    });
}