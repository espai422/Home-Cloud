function cookiesCheck (req, res, next) {
    if (!req.cookies.session){
        res.sendStatus(401);
        next('User not authorized');
    } else {
        next();
    };
};

module.exports = cookiesCheck;
