require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

function run() {
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
        .find({ $and: [{ "brands.alcohol": true }, { name: "Almdudler" }] })
        .forEach(({ name }) => console.log(name));

      client.close();
    }
  );
}

module.exports = { run };
