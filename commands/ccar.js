const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ccar")
    .setDescription("CryptoCars Price"),
  async execute(interaction) {
    cryptoPrice.getCCAR().then((price) =>
      interaction.reply({
        content: `USD/CCAR : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/CCAR : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
