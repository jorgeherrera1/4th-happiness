'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Questions = mongoose.model('HappinessQuestions');

/**
 * Create user
 */
exports.submit = function(req, res, next) {
    var questions = new Questions(req.body.questions);

    questions.save();

    res.send(200);
};