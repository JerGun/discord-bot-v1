require("dotenv").config();

const express = require("express");
const app = express();
const cryptoPrice = require("./services/fetch");
const mongoose = require("mongoose");
const separator = require("number-separator");
const logController = require("./controllers/log.controller");

mongoose.Promise = global.Promise;

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_CLOUD_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("[Success] : Connected to the database!");
    },
    (error) => {
      console.log("[Failed] : Can't connect to the database!", error);
      process.exit();
    }
  );

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.all("/", (req, res) => {
  res.send("JerGun Bot | Cryptocurrency Price Bot is running!");
});

app.post("/log", logController.add);

app.all("/all", (req, res) => {
  cryptoPrice.getAll().then((data) => res.send(data));
});

app.all("/btc", (req, res) => {
  cryptoPrice.getBTC().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/eth", (req, res) => {
  cryptoPrice.getETH().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/bnb", (req, res) => {
  cryptoPrice.getBNB().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/kub", (req, res) => {
  cryptoPrice.getKUB().then((price) =>
    res.send({
      THB: price,
    })
  );
});

app.all("/ccar", (req, res) => {
  cryptoPrice.getCCAR().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/cpan", (req, res) => {
  cryptoPrice.getCPAN().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/cgar", (req, res) => {
  cryptoPrice.getCGAR().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

app.all("/bcoin", (req, res) => {
  cryptoPrice.getBCOIN().then((price) =>
    res.send({
      USD: separator(price[0], ",", ""),
      THB: separator(price[1], ",", ""),
    })
  );
});

function keepAlive() {
  app.listen(process.env.PORT || 8000, () => {
    console.log("Server is ready.");
  });
}

module.exports = keepAlive;
