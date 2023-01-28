const { MongoClient } = require("mongodb");
const path = require('node:path')
const Db = 'mongodb+srv://cluster0.eykv0lz.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';
var options = {
    tls: true,
    tlsCertificateKeyFile: path.join(__dirname, '/X509-cert-4522523282152775927.pem'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
const client = new MongoClient(Db, options);
//console.log(client);

var _db;
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
          // Verify we got a good "db" object
          if (db)
          {
            _db = db.db("workHistory");
            console.log("Successfully connected to MongoDB."); 
          }
          return callback(err);
             });
      },
 
  getDb: function () {
    return _db;
  },
};