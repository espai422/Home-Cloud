const getUsrByMail = require('../../controllers/UserByMail.js');
const bcrypt = require('bcrypt');
// const salt

function login(req ,res ,next){

    const mail = req.body.mail;
    const passwd = req.body.password;
    getUsrByMail(mail, (err, user) => {
        if (err) {
            res.sendStatus(500); // return 500 code for server error
            next('route');
        } else if (user == null){ // return 401 when user does not exist
            res.sendStatus(401);
            next('route');
        } else {
            
        };


    });

};

