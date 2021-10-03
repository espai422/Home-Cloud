function checkReqFiles(req, res, next) {
    if (!req.files){
        res.sendStatus(400).json({
            success:false,
            message:'No files in request'
        });
        next('route');
    } else next();
};

module.exports = checkReqFiles;