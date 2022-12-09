// // DEPENDENCIES
// const express = require('express')
// const mongoose = require('mongoose')



// // CONFIG
// require('dotenv').config()
// const app = express()
// const dataBase = process.env.MONGO_URI
// mongoose.connect(dataBase, {useNewUrlParser: true, useUnifiedTopology: true}, 
//     () => { console.log('connected to mongo: ', dataBase) }
// )

// // MIDDLEWARE




// // ROUTES




// // LISTEN
// app.listen(process.env.PORT, () => {
//     console.log('listening on port', process.env.PORT)
// })


// BREAK


// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;

// // This will help us connect to the database
// // const dbo = require("../db/conn");

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;
// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// app.use(cors());
// app.use(express.json());
// // app.use(require("./routes/record"));
// // get driver connection
// // const dbo = require("./db/conn");
 

// const dbo = function dboFunction(){ let _db;

// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db) {
//             // Verify we got a good "db" object
//             if (db)
//             {
//                 _db = db.db("workoutapp");
//         console.log("Successfully connected to MongoDB."); 
//     }
//     return callback(err);
// });
// },

// getDb: function () {
//     return _db;
// },
// };}

// // const express = require("express");

// // recordRoutes is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /record.
// const recordRoutes = express.Router();

// // This section will help you get a list of all the records.
// recordRoutes.get('/', (req, res) => {
//     let db_connect = dbo.getDb("workoutapp");
//     db_connect
//     .collection("exercises")
//     .find({})
//     .toArray(function (err, result) {
//         if (err) throw err;
//         res.json(result);
//     });
// });

// // This section will help you get a single record by id
// recordRoutes.route("/:id").get(function (req, res) {
//     let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//  .collection("records")
//  .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//     });
// });

// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });