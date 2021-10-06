function CheckURLFiles(req, res, next) {
    if (!req.params.file){
        res.sendStatus(404);
        next('route');
    } else {
        next();
    };
};

module.exports = CheckURLFiles;