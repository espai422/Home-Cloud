const express = require('express');
const cookieparser = require('cookie-parser');
const fs = require('fs');

const cookiesCheck = require('../middlewares/authentication/session/cookieCheck.js');

const router = express.Router();

// middlewares

router.use(cookieparser());
router.use(cookiesCheck);

// routes

router.get('/:file?', (req, res) => {
    if (!req.params.file) req.params.file = '/'

    const user = req.cookies.session;
    const ReqPath = req.params.file.replace('-','/');
    const File = `${process.env.NODE_ENV}/${user}/${ReqPath}`

    if (fs.statSync(File).isDirectory()) {
        res.sendFile(File)
    } 

});

module.exports = router;