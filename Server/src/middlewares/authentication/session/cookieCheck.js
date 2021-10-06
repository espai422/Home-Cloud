function cookiesCheck (req, res, next) {
    if (!req.headers.user){
        console.log(req.headers.user)
        res.sendStatus(401);
        next('User not authorized XD');
    } else {
        next();
    };
};

module.exports = cookiesCheck;
