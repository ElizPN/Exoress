import express from "express";
import __dirname from "./dirname";

const app = express();

app.get("/page/", (req, res) => {
  res.sendFile(__dirname + "/page.html");
});

app.use((req, res) => {
  res.status(404).send("omm page not found");
});

app.listen(3000, () => {
  console.log("file is running");
});
