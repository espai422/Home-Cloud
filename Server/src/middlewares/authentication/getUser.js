const getUser = require('../../controllers/getDbUser.js');


function UserExists(req ,res ,next){

    const username = req.body.username;
    const passwd = req.body.password;

    getUser(username, (err, user) => {
        if (err) {
            res.sendStatus(500); // return 500 code for server error
            next('route');
        } else if (user == null){ // return 452 when user does not exist
            res.sendStatus(452);
            next('route');
        } else {
            // let id = JSON.stringify(user._id).replace('"','').replace('"','')
            req.UserData = user;
            next();
        };

    });

};

module.exports = UserExists;