const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.Port || 3000;

const Task = require("./api/models/todoListModel"); //created model loading here

// const task1 = new Task({
//   name: "Clean house",
//   Created_date: new Date(1992, 08, 10),
//   status: ["pending"]
// });
// task1.save();
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://todotasks",
  { useNewUrlParser: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
