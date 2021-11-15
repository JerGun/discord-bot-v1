const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bnb")
    .setDescription("Binance Coin Price"),
  async execute(interaction) {
    cryptoPrice.getBNB().then((price) =>
      interaction.reply({
        content: `USD/BNB : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/BNB : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
