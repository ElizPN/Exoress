import express from "express";

let app = express();

app.get("/", function (req, res) {
  res.send("helloo start page");
});

app.get("/1/", function (req, res) {
  res.send("page 1");
  console.log(req.path);
  console.log(req.url);
});

app.get("/2/", function (req, res) {
  res.send("page 2");
});

app.get("/3/", function (req, res) {
  res.send("page 3");
});

app.listen(3000, function () {
  console.log("runing");
});
