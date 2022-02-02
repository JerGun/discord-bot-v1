require("dotenv").config();

const LogModel = require("../models/log.model");
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

exports.add = (req, res) => {
  const payload = req.body;
  const log = new LogModel(payload);
  log
    .save()
    .then(res.status(201).end())
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });

  client.once("ready", () => {
    const exampleEmbed = new MessageEmbed()
      .setColor("#FFC300")
      .setTitle("Portfolio Visit Detect")
      .setURL("https://pawaret.dev/")
      .setAuthor(payload.ip, payload.flag)
      .setThumbnail(
        "https://ipfs.infura.io/ipfs/QmUgwi4JkLBrau1QecUxs1y4u7N42D3eCpeUKDaX6rLkHc"
      )
      .addFields(
        { name: "IP address", value: payload.ip },
        { name: "City", value: payload.city },
        { name: "Region", value: payload.region },
        { name: "Country Name", value: payload.country_name },
        { name: "Continent Name", value: payload.continent_name },
        { name: "Latitude ", value: payload.latitude },
        { name: "Longitude ", value: payload.longitude },
        { name: "Time ", value: payload.current_time }
      )
      .setTimestamp()
      .setFooter(
        "pawaret.dev",
        "https://ipfs.infura.io/ipfs/QmUgwi4JkLBrau1QecUxs1y4u7N42D3eCpeUKDaX6rLkHc"
      );
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const channel = guild.channels.cache.get(process.env.CHANNEL_ID);
    channel.send({ embeds: [exampleEmbed] });
  });
};
