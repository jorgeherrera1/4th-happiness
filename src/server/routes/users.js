'use strict';

module.exports = function(app) {
    app.post('/login', function(req, res) {
        var token = {
            email: 'jorge.herrera@4thsource.com'
        };

        res.json({
            token: token
        });
    });
};