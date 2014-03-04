'use strict';

var express = require('express');
var app = express();

// Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('4th Happiness started on port ' + port);

