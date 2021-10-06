function allow_Oringin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Nice anti CSRF
    next();
}

module.exports = allow_Oringin;