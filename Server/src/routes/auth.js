const express = require('express');
const router = express.Router();

// import middlewares 
const checkRequest = require('../middlewares/authentication/checkReq.js');
// const genUserData = require('../middlewares/genUserData.js');
const cookieParser = require('cookie-parser');

// crypto
const HashPassword = require('../middlewares/cypher/hashPasswd.js');
// const HashUserId = require('../middlewares/cypher/cryptoCookie.js').hashUserId;
const comparePsswd = require('../middlewares/cypher/comparePasswd.js');

// Register
const checkUser = require('../middlewares/authentication/register/checkUser.js');
const register = require('../middlewares/authentication/register/register.js');
const mkdir = require('../middlewares/authentication/register/mkdir.js');

// Login
const getUser = require('../middlewares/authentication/login/getUser.js');

router.use(express.json());
router.use(cookieParser())
router.use(checkRequest);
// router.use(genUserData);

router.get('/', (req, res) => {
    // res.send('OK')});
    res.cookie('name', 'express').send('hola')}); // sets a cookie

// Register new user --> json with username, password  returns session cookie and cookie text
router.post('/register',checkUser ,HashPassword, register,mkdir, (req, res) => {
    let cookie = JSON.stringify(req.UserData._id);
    res.cookie('session',cookie).send(cookie);
});

// Login --> json with mail and password returns session cookie and cookie text
router.post('/login',getUser, comparePsswd, (req,res) => {
    let cookie = JSON.stringify(req.UserData._id)
    res.cookie('session',cookie).send(cookie);
});



module.exports = router;