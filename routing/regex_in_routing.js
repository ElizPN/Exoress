import express from "express";
const app = express();

// we can use +, *, ?, ()

app.get("/user(name)?", (req, res) => {
  console.log(req.url);
  console.log(req.query);

  res.send("I USE REGEX");
});

app.listen(3000);
