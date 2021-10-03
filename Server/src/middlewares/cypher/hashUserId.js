const bcrypt = require('bcrypt');
const salt = '$2b$10$pEZLoOlHHLMtga5Ub5vZ5e';
const saltRounds = 10;

function hashUserId(req, res, next) {
    let userId = JSON.stringify(req.UserData._id).replace('"','').replace('"','');
    bcrypt.hash(userId, salt, (err, hash) => {
        // if (err) res.sendStatus(500).send('Error hashing the token');
        req.UserData.authToken = hash;
        next();
    });
};

module.exports = hashUserId;