const express = require('express');
const auth = require('./routes/auth.js');
const upload = require('./routes/upload.js');
const dir = require('./routes/dir.js');
const app = express();
const cookieParser = require('cookie-parser');
const genUserData = require('./middlewares/genUserData.js')

console.log('IMPORTS OK')

// Middlewares
app.use(genUserData)

console.log('Middlewares OK');

// routes
app.use('/auth',auth);
app.use('/upload', upload);
app.use('/', dir);

console.log('routes OK');
// app.use(express.json());

app.get('/',express.json(),cookieParser(),(req, res) => {
    let mycookies = req.cookies;
    console.log(typeof mycookies, mycookies.session);
    res.cookie('name', 'express').send('Cookie set?');
    // res.status(200).send('Hello world');
});

// exports.app = app;

app.listen(4500, () => {
    console.log('server started at port 4000');
  });