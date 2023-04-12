import express from "express";
import __dirname from "./__dirname.js";

const app = express();

app.get("/page/", (req, res) => {
  res.sendFile(__dirname + "/page.html");
});
app.get("/page1/", (req, res) => {
  res.sendFile(__dirname + "/page1.html");
});
app.get("/page2/", (req, res) => {
  res.sendFile(__dirname + "/page2.html");
});

app.use((req, res) => {
  res.status(404).send("omm page not found");
});

app.listen(3000, () => {
  console.log("file is running");
});
