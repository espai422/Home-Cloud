const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";
const collection = 'Users'

function getUser (username, fn){
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        // Create DB cursor
        const dbo = db.db('HomeCloud');

        // Check if gmail exists and executes the callback
        dbo.collection(collection).findOne({'username':username},(err, result) => {
            fn(err, result)
            db.close();
        }); 

    });

};

module.exports = getUser;