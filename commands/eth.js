const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eth")
    .setDescription("Ethereum Price"),
  async execute(interaction) {
    cryptoPrice.getETH().then((price) =>
      interaction.reply({
        content: `USD/ETH : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/ETH : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
