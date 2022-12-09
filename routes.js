const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("./connection.js");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Index
recordRoutes.route("/").get(function (req, res) {
  let db_connect = dbo.getDb("workoutapp");
  db_connect
    .collection("exercises")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Show
recordRoutes.route("/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("exercises")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// New
recordRoutes.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
  };
  db_connect.collection("exercises").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Update
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      sets: req.body.sets,
      reps: req.body.reps,
    },
  };
  db_connect
    .collection("exercises")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// Delete
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("exercises").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;