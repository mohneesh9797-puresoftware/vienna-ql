const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  `mongodb://${process.env["USER_NAME"]}:${
    process.env["USER_PW"]
  }@ds055980.mlab.com:55980/?authMechanism=DEFAULT&authSource=beverages`,
  { useNewUrlParser: true },
  function(err, client) {
    client
      .db(process.env["DB_NAME"])
      .collection(process.env["COLL_NAME"])
      .find()
      .toArray(function(err, result) {
        console.log(result);
        client.close();
      });
  }
);
