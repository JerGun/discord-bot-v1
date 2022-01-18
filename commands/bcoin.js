const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bcoin")
    .setDescription("Bombcrypto Price"),
  async execute(interaction) {
    cryptoPrice.getBCOIN().then((price) =>
      interaction.reply({
        content: `USD/BCOIN : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/BCOIN : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
