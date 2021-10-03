const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";
const collection = 'Users'


function Register (credentials, fn){

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        // Create DB cursor
        const dbo = db.db('HomeCloud');

        // register user and pass in DB
        dbo.collection(collection).insertOne(credentials, (err, result) => {
            // let id = JSON.stringify(result.insertedId).replace('"','').replace('"','')
            // need to repeat the replace to avioid a bug
            let id = result.insertedId
            fn(err, id);
            db.close();
        });
    });
};

module.exports = Register;