'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
    root: rootPath,
    mailHost: 'pop.4thsource.com',
    mailPort: 110,
    secret: 'TheSecretOfHappiness'
};