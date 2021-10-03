const bcrypt = require('bcrypt');
const salt = '$2b$10$pEZLoOlHHLMtga5Ub5vZ5e';
const saltRounds = 10;

function hashpassword(req, res, next) {
    let password = req.body.password;
    
    bcrypt.hash(password, salt, (err, hash) => {
        // if (err) res.sendStatus(500).send('Error hashing the password');
        if (err) throw err;
        req.body.password = hash;
        next();
    });    
};

function hashUserId(req, res, next) {
    let userId = req.token
    bcrypt.hash(userId, salt, (err, hash) => {
        // if (err) res.sendStatus(500).send('Error hashing the token');
        req.authToken = hash;
        next();
    });
};

module.exports.hashpassword = hashpassword;
module.exports.hashUserId = hashUserId;