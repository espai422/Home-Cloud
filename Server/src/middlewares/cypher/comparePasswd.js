const bcrypt = require('bcrypt');

function comparePasswd(req, res, next) {

    const passwd = req.body.password;
    const hashed = req.UserData.password;

    bcrypt.compare(passwd, hashed, (err, result) => {
        if (err) {
            res.sendStatus(500); // Internal server error
            next('Route');
        };

        if (result == true){
            next();
        } else {
            res.sendStatus(401); // 401 UNAUTHORIZED ERROR
            next('route');
        };
    });

};

module.exports = comparePasswd;