const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kub")
    .setDescription("Bitkub Coin Price"),
  async execute(interaction) {
    cryptoPrice.getKUB().then((price) =>
      interaction.reply({
        content: `THB/KUB : ${price} THB`,
      })
    );
  },
};
