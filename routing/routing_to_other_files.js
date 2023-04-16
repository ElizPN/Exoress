import express from "express";
import { __dirname } from "./__dirname.js";
import fs from "fs/promises";
import { constants } from "fs";

const app = express();

app.get("/page/:num", async (req, res) => {
  const path = __dirname + "/pages/" + req.params.num + ".html";

  try {
    await fs.access(path, constants.F_OK);
    res.sendFile(path);
  } catch (error) {
    res.status(404).send("Page not found");
  }
});

app.listen(3000);
