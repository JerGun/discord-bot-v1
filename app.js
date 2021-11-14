require("dotenv").config();

const separator = require("number-separator");
const { Client, Intents } = require("discord.js");

const keepAlive = require("./server");
const cryptoPrice = require("./services/fetch");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Visual Studio Code", { type: "PLAYING" }).catch(console.error);
});

client.on("message", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "$btc" || msg.content === "$BTC") {
    cryptoPrice
      .getBTC()
      .then((price) =>
        msg.channel.send(
          `USD/BTC : ${separator(price[0], ",", "")} USD\nTHB/BTC : ${separator(
            price[1],
            ",",
            ""
          )} THB`
        )
      );
  }

  if (msg.content === "$eth" || msg.content === "$ETH") {
    cryptoPrice
      .getETH()
      .then((price) =>
        msg.channel.send(
          `USD/ETH : ${separator(price[0], ",", "")} USD\nTHB/ETH : ${separator(
            price[1],
            ",",
            ""
          )} THB`
        )
      );
  }

  if (msg.content === "$bnb" || msg.content === "$BNB") {
    cryptoPrice
      .getBNB()
      .then((price) =>
        msg.channel.send(
          `USD/BNB : ${separator(price[0], ",", "")} USD\nTHB/BNB : ${separator(
            price[1],
            ",",
            ""
          )} THB`
        )
      );
  }

  if (msg.content === "$kub" || msg.content === "$KUB") {
    cryptoPrice
      .getKUB()
      .then((kub) => msg.channel.send(`THB/KUB : ${kub} THB`));
  }

  if (msg.content === "$ccar" || msg.content === "$CCAR") {
    cryptoPrice
      .getCCAR()
      .then((price) =>
        msg.channel.send(
          `USD/CCAR : ${separator(
            price[0],
            ",",
            ""
          )} USD\nTHB/CCAR : ${separator(price[1], ",", "")} THB`
        )
      );
  }

  if (msg.content === "$lumi" || msg.content === "$LUMI") {
    cryptoPrice
      .getLUMI()
      .then((price) =>
        msg.channel.send(
          `USD/LUMI : ${price[0].toFixed(6)} USD\nTHB/LUMI : ${price[1].toFixed(
            2
          )} THB`
        )
      );
  }

  if (msg.mentions.users.first().id === "304114263927029760")
    return msg.channel.send(`${msg.mentions.members.first()} ผู้กล้าขี้ระแวง`);

  if (msg.mentions.users.first().id === "426748155900461076")
    return msg.channel.send(`${msg.mentions.members.first()} ผู้กล้าขี้ระแวง`);
});

keepAlive();
client.login(process.env.TOKEN);
