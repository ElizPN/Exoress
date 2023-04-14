import express from "express";

const app = express();

app.get("/test/show/all/", function (req, res) {
  res.send("first prority");
});

app.get("/test/show/:num/", function (req, res) {
  res.send("second priority");
});

app.get("/test/:num1/:num2", function (req, res) {
  res.send("third priority");
});

app.listen(3000);
