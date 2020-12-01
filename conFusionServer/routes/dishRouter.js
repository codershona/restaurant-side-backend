const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route("/dishes").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending all the dishes to you!");
}).post((req, res, next) => {
    res.write("Adding the dish: " + req.body.name + " with details: " + req.body.description + "\n");
    res.end("Adding the dish: " + req.body.name + " with details: " + req.body.description);
}).put((req, res, next) => {
    res.write("Updating the dish: " + req.body.name + " with details: " + req.body.description + "\n");
    res.end("Updating the dish: " + req.body.name + " with details: " + req.body.description);
}).delete((req, res, next) => {
    res.end("Deleting all dishes");
});

dishRouter.route("/dishes/:dishId").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending details of the dish: " + req.params.dishId + " to you!");
}).post((req, res, next) => {
    res.write("Adding the dish: " + req.params.dishId + "\n");
    res.end("Adding the dish: " + req.params.dishId);
}).put((req, res, next) => {
    res.write("Updating the dish: " + req.params.dishId + "\n");
    res.end("Updating the dish: " + req.params.dishId);
}).delete((req, res, next) => {
    res.end("Deleting dish: " + req.params.dishId);
});

module.exports = dishRouter;