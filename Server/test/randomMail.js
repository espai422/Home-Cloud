const bcrypt = require('bcrypt');

function randomMail(){
    let salt = bcrypt.genSaltSync(10);
    let gmail = `${salt}@gmail.com`
    return gmail
};

module.exports = randomMail;