import express from "express";

const app = express();

app.get("/test/:num/", (req, res) => {
  const numParam = req.params.num;
  let square = numParam * numParam;
  square = square.toString();
  res.send(square);
});

app.listen(3000);
