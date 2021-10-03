
function checkReqBody (req, res, next) {

    if (!req.body.username || !req.body.password){
        res.sendStatus(400);
        // let myerr = new Error;
        // let myerr = 'Request does not contain username or password';
        let myerr = ' '
        next(myerr);
    } else {
        next();
    };

};

module.exports = checkReqBody;