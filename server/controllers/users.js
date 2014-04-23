'use strict';

/**
 * Module dependencies
 */
var jwt = require('jsonwebtoken'),
    config = require('../config/config');

/**
 * Login
 */
exports.login = function(req, res) {
    var profile = {
        email: req.body.email
    };

    // We are sending the profile inside the token
    var token = jwt.sign(profile, config.secret, { expiresInMinutes: 30 });

    res.json({ token: token });
};