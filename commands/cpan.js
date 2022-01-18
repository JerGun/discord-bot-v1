const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");
const separator = require("number-separator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cpan")
    .setDescription("CryptoPlanes Price"),
  async execute(interaction) {
    cryptoPrice.getCPAN().then((price) =>
      interaction.reply({
        content: `USD/CPAN : ${separator(
          price[0],
          ",",
          ""
        )} USD\nTHB/CPAN : ${separator(price[1], ",", "")} THB`,
      })
    );
  },
};
