const express = require("express");
 
// workHistoryRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /workHistory.
const workHistoryRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn.js");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the workHistorys.
workHistoryRoutes.route("/workHistory").get(async function (req, res) {
    //const client = dbo.getClient();
    //client.connect();
    //console.log('req: ', req);
    let db_connect = await dbo.getDb();
    //const cursor = db_connect.collection('history').find({'company_name': 'Postlight'});
    //console.log(cursor);
    //console.log('db_connect: ', db_connect);
    db_connect
    .collection("history")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        console.log('result: ', result);
        res.json(result);
    });
});
 
// This section will help you get a single workHistory by id
workHistoryRoutes.route("/workHistory/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("history")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new workHistory.
workHistoryRoutes.route("/workHistory/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("workHistory").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a workHistory by id.
workHistoryRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("history")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a workHistory
workHistoryRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("history").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = workHistoryRoutes;