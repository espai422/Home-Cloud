const getUser = require('../../controllers/getDbUser.js');

function userExists(req, res, next) {

    const username = req.body.username;
    // const mail = 'TEST@TEST.com';
    getUser(username, (err, result) => {
        if (err) {
            res.sendStatus(500)
            next('route');
        } else if (result != null) {
            res.send('Registered');
            next('route');
        } else {
            next();
        };

        
    });

};

module.exports = userExists;