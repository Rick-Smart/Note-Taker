// Dependencies
// ===========================================================
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", function (req, res) {
  res.send(path.join(__dirname, "../public/notes.html"));
});









app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
