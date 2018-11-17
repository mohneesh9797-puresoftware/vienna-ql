const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  `mongodb://${process.env["USER_NAME"]}:${
    process.env["USER_PW"]
  }@${process.env["HOST"]}:${process.env["PORT"]}/?authMechanism=DEFAULT&authSource=${process.env["COLL_NAME"]}`,
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
