const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("JerGun Bot | Cryptocurrency Price Bot is running!");
});

function keepAlive() {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is ready.");
  });
}

module.exports = keepAlive