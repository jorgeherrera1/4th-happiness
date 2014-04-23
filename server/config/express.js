'use strict';

// Module dependencies
var express = require('express'),
    path = require('path'),
    expressJwt = require('express-jwt'),
    config = require('./config');

module.exports = function(app, passport) {
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

        // Use passport session
        app.use(passport.initialize());

        // We are going to protect /api routes with JWT
        app.use('/api', expressJwt({secret: config.secret}));

        // Routes should be at the last
        app.use(app.router);

        require(path.join(config.root, '/server/models/questions'));

        require(path.join(config.root, '/server/routes/users'))(app, passport);
        require(path.join(config.root, '/server/routes/questions'))(app);

        // Setting the fav icon and static folder
        app.use(express.favicon());
        app.use(express.static(path.join(config.root, '/public')));
    });
}