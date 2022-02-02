require("dotenv").config();

const LogModel = require("../models/log.model");
const client = require("../app");

exports.add = (req, res) => {
  const payload = req.body;
  const log = new LogModel(payload);
  log
    .save()
    .then(res.status(201).end())
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
  client.on("ready", () => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const channel = guild.channels.cache.get(process.env.CHANNEL_ID);
    channel.send("You message");
  });
};
