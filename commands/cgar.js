const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cgar")
    .setDescription("CryptoGuards Price"),
  async execute(interaction) {
    cryptoPrice.getCGAR().then((price) =>
      interaction.reply({
        content: `USD/CGAR : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/CGAR : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
