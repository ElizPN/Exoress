import express from "express";


const app = express();

const countryRouter = express.Router();
const cityRouter = express.Router();

cityRouter.get("/edit/:id", (req, res) => {
  res.send("city edit number:" + req.params.id);
});
cityRouter.get("/show/:id", (req, res) => {
  res.send("city show number:" + req.params.id);
});

countryRouter.get("/list/", (req, res) => {
  res.send("country list");
});
countryRouter.get("/show/:id", (req, res) => {
  res.send("country show number:" + req.params.id);
});
countryRouter.get("/edit/:id", (req, res) => {
  res.send("country edit number:" + req.params.id);
});

app.use("/city/", cityRouter);
app.use("/country/", countryRouter);

app.listen(3000);
