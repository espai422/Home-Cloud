const getMail = require('../../controllers/UserByMail.js');

function userExists(req, res, next) {

    const mail = req.body.mail;
    // const mail = 'TEST@TEST.com';
    getMail(mail, (err, result) => {
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