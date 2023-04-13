import express from "express";
import { __dirname } from "./__dirname.js";

const app = express();

app.use(express.static(__dirname + "/public/"));

app.listen(3000, () => {
  console.log("this file is running");
});
