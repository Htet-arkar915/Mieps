const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/mieps-database";
const dbName = "mieps-database";

let db;

// async function connect() {
//   console.log("Hello");
//   const client = new MongoClient(url, { useUnifiedTopology: true });

//   try {
//     await client.connect();
//     db = client.db(dbName);
//     const collection = db.collection("user");
//     console.log("Connected to MongoDb");
//   } catch (e) {
//     console.log(e);
//   }
// }

async function getDbCollection(name) {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  console.log("Connected to MongoDb");
  return db.collection(name);
}
module.exports = { getDbCollection };
