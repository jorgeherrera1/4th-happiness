'use strict';

// Module dependencies
var express = require('express');

// Load configurations
// Set the node environment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables
var config = require('./config/config'),
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Create Express app
var app = express();

// Express settings
require('./config/express')(app);

// Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);

console.log('4th Happiness started on port ' + port);

// Expose app
exports = module.exports = app;

