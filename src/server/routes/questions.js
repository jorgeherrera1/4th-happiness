'use strict';

// User routes use users controller
var questions = require('../controllers/questions');

module.exports = function(app) {
    app.post('/api/submit', questions.submit);
};