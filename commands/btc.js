const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("btc")
    .setDescription("Bitcoin Price"),
  async execute(interaction) {
    cryptoPrice.getBTC().then((price) =>
      interaction.reply({
        content: `USD/BTC : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/BTC : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
