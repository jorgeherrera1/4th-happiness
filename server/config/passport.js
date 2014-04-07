'use strict';

var LocalStrategy = require('passport-local').Strategy,
    POP3Client = require("poplib"),
    config = require('./config');

module.exports = function(passport) {

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done) {
            var client = new POP3Client(config.mailPort, config.mailHost, {
                tlserrs: false,
                enabletls: false,
                debug: false
            });

            client.on('error', function(err) {
                console.log('Unable to connect to Server: ' + err);
                return done(null, false, {
                    message: 'Unable to connect to Server'
                });
            });

            client.on('connect', function() {
                console.log('Logging in: ' + email);
                client.login(email, password);
            });

            client.on('login', function(status, data) {
                if (status) {
                    console.log('Logged in: ' + email);
                    client.quit();
                    return done(null, {
                        email: email
                    });
                } else {
                    console.log('Invalid username or password: ' + email);
                    client.quit();
                    return done(null, false, {
                        message: 'Invalid username or password'
                    });
                }

            });
        }
    ));

};