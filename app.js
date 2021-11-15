require("dotenv").config();

const separator = require("number-separator");
const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");

const keepAlive = require("./server");
const cryptoPrice = require("./services/fetch");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user
    .setActivity("Visual Studio Code", { type: "PLAYING" })
    .catch(console.error);
});

client.on("message", (msg) => {
  if (msg.author.bot) return;

  // if (msg.content === "$help") {
  //   const embed = new Discord.MessageEmbed().setColor("RANDOM");
  //   msg.reply({
  //     content: embed.setDescription(
  //       "**$help** - Display the help menu\n\n\
  //     ***Cryptocurrency Price***\n\
  //     **$btc** - Bitcoin Price\n\
  //     **$eth** - Ethereum Price\n\
  //     **$bnb** - Binance Coin Price\n\
  //     **$kub** - Bitkub Coin Price\n\
  //     **$ccar** - CryptoCars Price\n\
  //     **$lumi** - LUMI Price"
  //     ),
  //     ephemeral: true,
  //   });
    // msg.channel.send();
  // }

  if (msg.mentions.members.size) {
    if (msg.mentions.users.first().id === "908733995326533652")
      return msg.reply(`เรียกทำควยไร`);

    if (msg.mentions.users.first().id === "266578949104992257")
      return msg.channel.send(`${msg.mentions.members.first()} พั้นช์ของโอ้น`);

    if (msg.mentions.users.first().id === "426748155900461076")
      return msg.channel.send(
        `${msg.mentions.members.first()} เบนซีผู้กล้าขี้ระแวง`
      );

    if (msg.mentions.users.first().id === "304114263927029760")
      return msg.channel.send(
        `${msg.mentions.members.first()} พี่ก้องของน้องแอ๋ว`
      );

    if (msg.mentions.users.first().id === "603230504703229962")
      return msg.channel.send(`${msg.mentions.members.first()} วันๆหาแต่หี`);
  }

  if (msg.content === "$btc") {
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

  if (msg.content === "$eth") {
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

  if (msg.content === "$bnb") {
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

  if (msg.content === "$kub") {
    cryptoPrice
      .getKUB()
      .then((kub) => msg.channel.send(`THB/KUB : ${kub} THB`));
  }

  if (msg.content === "$ccar") {
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

  if (msg.content === "$lumi") {
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
});

keepAlive();
client.login(process.env.TOKEN);
