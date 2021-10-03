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

module.exports = hashpassword;