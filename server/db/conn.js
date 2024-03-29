const { MongoClient } = require("mongodb");
const Db = process.env.URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    console.log("connectToServer works...");
    client.connect((err, db) => {
      console.log("client.connect works...");
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("test");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
