import express from "express";
const app = express();

const arr = ["a", "b", "c"];

app.get("/test/:num", (req, res) => {
  if (arr[req.params.num]) {
    res.send(arr[req.params.num]);
  } else {
    res.status(404).send("not found :(");
  }
});

app.use((req, res) => {
  res.status(404).send("Page not found :((");
});

app.listen(3000);
