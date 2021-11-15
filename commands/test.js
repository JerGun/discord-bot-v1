const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("test btc"),
  async execute(interaction) {
    interaction.reply({ content: "test", ephemeral: true });
  },
};

