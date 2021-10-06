// const https = require('https')
// import routers
const auth = require('./routes/auth.js');
const dir = require('./routes/dir.js');
const upload = require('./routes/upload.js');
const download = require('./routes/download.js');

// Import middlewares
const cors = require('cors');
const genUserData = require('./middlewares/genUserData.js')
const AllowOrigin = require('./middlewares/Allow-Origin.js')

// Express app
const express = require('express');
const app = express();

// Middlewares
app.use(cors());
app.use(genUserData)
app.use(AllowOrigin)

// routes
app.use('/content', dir);
app.use('/auth',auth);
app.use('/upload', upload);
app.use('/download',download);


app.post('/test' ,(req, res) => {
    console.log(req.headers.user);
    res.send('{"200":"OK"}');
});

app.get('/descargar',(req, res) => {
    console.log(req)
    res.download('/home/espai422/Escritorio/Projectes/Home-Cloud/Server/TESTROUTE/61536466a4ea6a79e612594b/06.jpg')
});

// exports.app = app;

app.listen(4500, () => console.log('Server started at port 4500'));
// https.createServer(options, app).listen(443);