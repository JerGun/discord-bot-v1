require("dotenv").config();

const LogModel = require("../models/log.model");
const client = require("../app");
const { MessageEmbed } = require("discord.js");

exports.add = (req, res) => {
  const payload = req.body;
  const log = new LogModel(payload);
  log
    .save()
    .then(res.status(201).end())
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
  const embed = new MessageEmbed()
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
      { name: "Latitude ", value: payload.latitude.toString(), inline: true },
      {
        name: "Longitude ",
        value: payload.longitude.toString(),
        inline: true,
      }
    )
    .setTimestamp()
    .setFooter(
      "pawaret.dev",
      "https://ipfs.infura.io/ipfs/QmUgwi4JkLBrau1QecUxs1y4u7N42D3eCpeUKDaX6rLkHc"
    );
  client.message(embed);
};
