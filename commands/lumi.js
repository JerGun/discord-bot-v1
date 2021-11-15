const { SlashCommandBuilder } = require("@discordjs/builders");
const cryptoPrice = require("../services/fetch");

module.exports = {
    data: new SlashCommandBuilder().setName("lumi").setDescription("LUMI Price"),
    async execute(interaction) {
      cryptoPrice.getLUMI().then((price) =>
        interaction.reply({
          content: `USD/LUMI : ${price[0].toFixed(
            6
          )} USD\nTHB/LUMI : ${price[1].toFixed(2)} THB`,
        })
      );
    },
  };
