import express from "express";
const app = express();

// we can use +, *, ?, ()

app.get(/admin|user(name)?/, (req, res) => {
  console.log(req.url);
  console.log(req.query);

  res.send("I USE FULL REGEX");
});

app.listen(3000);
