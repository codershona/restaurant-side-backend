const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/leaders").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending all the leaders to you!");
}).post((req, res, next) => {
    res.write("Adding the leader: " + req.body.name + " with details: " + req.body.description + "\n");
    res.end("Adding the leader: " + req.body.name + " with details: " + req.body.description);
}).put((req, res, next) => {
    res.write("Updating the leader: " + req.body.name + " with details: " + req.body.description + "\n");
    res.end("Updating the leader: " + req.body.name + " with details: " + req.body.description);
}).delete((req, res, next) => {
    res.end("Deleting all dishes");
});

leaderRouter.route("/leaders/:leaderId").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending details of the leader: " + req.params.leaderId + " to you!");
}).post((req, res, next) => {
    res.write("Adding the leader: " + req.params.leaderId + "\n");
    res.end("Adding the leader: " + req.params.leaderId);
}).put((req, res, next) => {
    res.write("Updating the leader: " + req.params.leaderId + "\n");
    res.end("Updating the leader: " + req.params.leaderId);
}).delete((req, res, next) => {
    res.end("Deleting leader: " + req.params.leaderId);
});

module.exports = leaderRouter;