const express = require("express");
const wikiRouter = express.Router();
const addPage = require("../views/addPage");

module.exports = wikiRouter;

wikiRouter.get("/", (req, res, next) => {
  console.log("This is our Wiki get method");
});

wikiRouter.post("/", (req, res, next) => {});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});
