// http library
// const http = require('http');

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

// Create httpServer
// const httpServer = http.createServer(app);
// httpServer.listen(4500);

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
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.headers.user);
    res.send('Holabuenas');
});

app.get('/descargar',(req, res) => {
    console.log(req)
    res.download('/home/espai422/Escritorio/Projectes/Home-Cloud/Server/TESTROUTE/61536466a4ea6a79e612594b/06.jpg')
});

exports.app = app;
// app.listen(4500, () => console.log('Server started at port 4500'));
