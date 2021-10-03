const express = require('express');
const fileupload = require('express-fileupload');
const cookieparser = require('cookie-parser');
const fs = require('fs');

const cookiesCheck = require('../middlewares/authentication/session/cookieCheck.js');
const CheckFiles = require('../middlewares/upload/noFiles.js');

const router = express.Router();

// middlewares

router.use(fileupload());
router.use(cookieparser());
router.use(cookiesCheck);

// upload

router.post('/:path?', CheckFiles ,(req, res, next) => {
    if (!req.params.path) req.params.path = '/'

    const user = req.cookies.session;
    const ReqPath = req.params.path.replace('-','/');
    const WorkingPath = `${process.env.NODE_ENV}/${user}/${ReqPath}`

    const Files = req.files;


    for (let item in Files){

        let fileObj = Files[item];

        if (fileObj.name){
            let path = `${WorkingPath}/${fileObj.name}`
            fileObj.mv(path, (err) => {
                if (err) {
                    res.sendStatus(500);
                    return next('route');
                };
                console.log('File Uploaded');
            });

        } else {
            fileObj.forEach(file => {
                let path = `${WorkingPath}/${file.name}`
                file.mv(path, (err) => {
                    if (err) {
                        res.sendStatus(500);
                        return next('route');
                    };
                    console.log('File Uploaded');
                });
            });
        };
    };

    res.send('Files Uploaded');

});

router.post('/mkdir/:path?', (req, res) => {
    if (!req.params.path) req.params.path = '/'

    const user = req.cookies.session;
    const ReqPath = req.params.path.replace('-','/');
    const PathToCreate = `${process.env.NODE_ENV}/${user}/${ReqPath}`

    if (fs.existsSync(PathToCreate)) {
        return res.sendStatus(400);
    } else {
        fs.mkdir(PathToCreate, err => {
            if (err) {
                throw err;
            };
            console.log("Directory is created.");
        });
    };
    res.send('dir has been created');
});

router.post('/rm/:path?', (req, res) => {
    if (!req.params.path) return res.sendStatus(400);

    const user = req.cookies.session;
    const ReqPath = req.params.path.replace('-','/');
    const remove = `${process.env.NODE_ENV}/${user}/${ReqPath}`

    fs.rm(remove, options={recursive:true} ,() => res.sendStatus(200));
});


module.exports = router;