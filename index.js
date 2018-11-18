require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  `mongodb://${process.env["USER_NAME"]}:${process.env["USER_PW"]}@${
    process.env["HOST"]
  }:${process.env["PORT"]}/?authMechanism=DEFAULT&authSource=${
    process.env["DB_NAME"]
  }`,
  { useNewUrlParser: true },
  function(err, client) {
    if (err) console.warn({ err });

    client
      .db(process.env["DB_NAME"])
      .collection(process.env["COLL_NAME"])
      .find({ "brands.alcohol": true }) //TODO
      .forEach(function(elem) {
        elem.brands
          //.filter(({ alcohol }) => alcohol)
          .forEach(({ name }) => console.log(name));
      });

    client.close();
  }
);
