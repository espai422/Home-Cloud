function genUserData(req, res, next){

    req.UserData = {};
    next();
}

module.exports = genUserData;