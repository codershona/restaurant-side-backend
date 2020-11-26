const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/promotions").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending all the promos to you!");
}).post((req, res, next) => {
    res.write("Adding the promo: " + req.body.name + "with details: " + req.body.description + "\n");
    res.end("Adding the promo: " + req.body.name + " with details: " + req.body.description);
}).put((req, res, next) => {
    res.write("Updating the promo:" + req.body.name + "with details: " + req.body.description + "\n");
    res.end("Updating the promo: " + req.body.name + " with details: " + req.body.description);
}).delete((req, res, next) => {
    res.end("Deleting the promo: " + req.body.name + " with details: " + req.body.description);
});

promoRouter.route("/promotions/:promoId").all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
}).get((req, res, next) => {
    res.end("Sending the promo: " + req.params.promoId);
}).post((req, res, next) => {
    res.write("Adding the promo: " + req.params.promoId + "\n");
    res.end("Adding the promo: " + req.params.promoId);
}).put((req, res, next) => {
    res.write("Updating the promo: " + req.params.promoId + "\n");
    res.end("Updating the promo: " + req.params.promoId);
}).delete((req, res, next) => {
    res.end("Deleting the promo: " + req.params.promoId);
});

module.exports = promoRouter;