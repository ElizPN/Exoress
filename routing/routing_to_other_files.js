import express from "express";
import { __dirname } from "./__dirname.js";

const app = express();

app.get("/page/:num", (req, res) => {
  res.sendFile(__dirname + "/pages/" + req.params.num + ".html");
  console.log(req.params.num);
});

app.listen(3000);
