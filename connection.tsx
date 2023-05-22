import { AnyError, Db, MongoClient } from "mongodb";
const dbURI = process.env.MONGO_URI;
const client = new MongoClient(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


let _db: Db;


function connectToServer(callback: (error: AnyError | undefined) => void) {
  client.connect(function (err, db) {
    // Verify we got a good "db" object
    if (db) {
      _db = db.db("workoutapp");
      console.log("Successfully connected to MongoDB.");
    }
    return callback(err);
  });
};

function getDb() {
  return _db;
};


export {connectToServer, getDb}