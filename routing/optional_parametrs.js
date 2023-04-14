import express from "express";
const app = express();

// ? after parametrs makes it optional
app.get("/test/:num1/:num2?/", function (req, res) {
  //   res.send(req.query);
  res.send(req.url);
});
app.listen(3000);
