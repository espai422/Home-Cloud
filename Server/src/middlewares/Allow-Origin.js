function allow_Oringin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
}

module.exports = allow_Oringin;