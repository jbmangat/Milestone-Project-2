import express, {Request, Response}from "express";
import {getDb} from "./connection";

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Index
recordRoutes.route("/").get(function (req: Request, res: Response) {
  let db_connect = getDb("workoutapp");
  db_connect
    .collection("exercises")
    .find({})
    .toArray(function (err: Error | undefined, result: any[]) {
      if (err) throw err;
      res.json(result);
    });
});

// Show
recordRoutes.route("/:id").get(function (req: Request, res: Response) {
  let db_connect = getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("exercises")
    .findOne(myquery, function (err: Error | undefined, result: any) {
      if (err) throw err;
      res.json(result);
    });
});

// New
recordRoutes.route("/add").post(function (req: Request, res: Response) {
  let db_connect = getDb();
  let myobj = {
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
  };
  db_connect.collection("exercises").insertOne(myobj, function (err: Error | undefined, res: any) {
    if (err) throw err;
    res.json(res);
  });
});

// Update
recordRoutes.route("/update/:id").post(function (req: Request, res: Response) {
  let db_connect = getDb();
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
    .updateOne(myquery, newvalues, function (err: Error | undefined, res: any) {
      if (err) throw err;
      console.log("1 document updated");
      res.json(res);
    });
});

// Delete
recordRoutes.route("/:id").delete((req: Request, res: Response) => {
  let db_connect = getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("exercises").deleteOne(myquery, function (err: Error | undefined, obj: any) {
    if (err) throw err;
    console.log("1 document deleted");
    res.json(obj);
  });
});

module.exports = recordRoutes;