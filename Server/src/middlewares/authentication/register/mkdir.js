const dotenv = require('dotenv').config();

const fs = require('fs');
if (!process.env.NODE_ENV){
    throw new Error('SET NODE_ENV PATH')
};
const path = process.env.NODE_ENV

function mkdir(req, res, next) {

    let userId = JSON.stringify(req.UserData._id).replace('"','').replace('"','');
    let dir = `${path}${userId}`;

    fs.mkdir(dir, (err) => {
    if (err) {
        throw err;
    }
    // console.log("Directory is created.");
    next();
});
};

module.exports = mkdir
