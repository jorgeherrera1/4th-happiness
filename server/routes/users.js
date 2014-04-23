'use strict';

var users = require('../controllers/users');

module.exports = function(app, passport) {
    app.post('/login', passport.authenticate('local', {
        failureFlash: false,
        session: false
    }), users.login);
};