const express = require('express');
const cookieparser = require('cookie-parser');
const fs = require('fs');

const cookiesCheck = require('../middlewares/authentication/session/cookieCheck.js');

const router = express.Router();

// middlewares

router.use(cookieparser());
router.use(cookiesCheck);

// routes

router.get('/:dir?', (req, res) => {
    if (!req.params.dir) req.params.dir = '/'

    const user = req.cookies.session;
    const ReqPath = req.params.dir.replace('-','/');
    const WorkingPath = `${process.env.NODE_ENV}/${user}/${ReqPath}`

    const result = {list:fs.readdirSync(WorkingPath)};

    res.json(result);

});

module.exports = router;