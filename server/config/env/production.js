'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || 'mongodb://jherrera:jherrera@paulo.mongohq.com:10040/jherrera',
    port: process.env.PORT || 80
};