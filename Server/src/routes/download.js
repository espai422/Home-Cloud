const express = require('express');
const cookieparser = require('cookie-parser');
const fs = require('fs');
const CheckForFiles = require('../middlewares/download/NoFiles.js');
const session = require('../middlewares/authentication/session/cookieCheck.js');

const router = express.Router();

// middlewares

router.use(cookieparser());
router.use(session);

// routes

router.get('/:file',CheckForFiles ,(req, res) => {

    const user = req.headers.user;
    const ReqPath = req.params.file.replace('-','/');
    var FullPath = `${process.env.NODE_ENV}/${user}/${ReqPath}`
    var list =  FullPath.split('/');

    const Filename = list.pop();
    const FilePath = list.join('/')


    // if (fs.statSync(FullPath).isDirectory() == false) {
    //     res.sendFile(FullPath)
    // } else {
    //     res.sendStatus(400);
    // };
    if (fs.statSync(FullPath).isDirectory() == false) {
        res.download(FullPath)
    } else {
        res.sendStatus(400);
    };
    console.log(Filename, FilePath)

    // if (fs.statSync(FullPath).isDirectory() == false) {
    //     res.download(FilePath, Filename);
    // } else {
    //     res.sendStatus(500);
    // };

});

module.exports = router;