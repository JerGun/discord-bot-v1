require("dotenv").config();

const axios = require("axios");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const keepAlive = require("./server");

function getLumi() {
  return axios
    .get(
      "https://api.loremboard.finance/api/v2/charts/info?symbol=0x95013Dcb6A561e6C003AED9C43Fb8B64008aA361-bkc-usd"
    )
    .then((res) => {
      return res.data["priceUSD"];
    });
}

function getKUB() {
  return axios
    .get("https://www.bitkub.com/api/market/information?currency=KUB")
    .then((res) => {
      return res.data["data"]["last"]["thb"];
    });
}

function getTHB() {
  return axios
    .get("https://www.xe.com/api/protected/midmarket-converter/", {
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6b09EZndjbENXUGtLVUIyeGlhdmdPS25mQmp4N01LMVI=",
      },
    })
    .then((res) => {
      return res.data["rates"]["THB"];
    });
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "$lumi") {
    getTHB().then((thb) => {
      getLumi().then((lumi) =>
        msg.channel.send(
          `USD/LUMI : ${String(lumi.toFixed(6))} USD \n THB/LUMI : ${String((lumi * thb).toFixed(2))} THB`
        )
      );
    });
  }

  if (msg.content === "$kub") {
    getKUB().then((kub) => msg.channel.send(`THB/KUB : ${kub} THB`));
  }
});

keepAlive();
client.login(process.env.TOKEN);
