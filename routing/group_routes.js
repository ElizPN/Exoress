import express from "express";

// app.get("/city/show/:id", function (req, res) {});
// app.get("/city/edit/:id", function (req, res) {});
// app.get("/country/list", function (req, res) {});
// app.get("/country/show/:id", function (req, res) {});
// app.get("/country/edit/:id", function (req, res) {});

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
