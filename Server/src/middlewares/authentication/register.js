const createUser = require('../../controllers/createUser.js');

function registerUser(req ,res, next) {

    const credentials = req.body;

    createUser(credentials, (err, userID) => {
        if (err) {
            res.sendStatus(500);
            next('route')
        }
        req.UserData._id = userID;
        next();
    });
    
    

};

module.exports = registerUser;