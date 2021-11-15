const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display the help menu"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "**$help** - Display the help menu\n\n\
  ***Cryptocurrency Price***\n\
  **$btc** - Bitcoin Price\n\
  **$eth** - Ethereum Price\n\
  **$bnb** - Binance Coin Price\n\
  **$kub** - Bitkub Coin Price\n\
  **$ccar** - CryptoCars Price\n\
  **$lumi** - LUMI Price"
      );
    await interaction.deferReply({ ephemeral: true });
    interaction.editReply({ embeds: [ embed ] , ephemeral: true });
  },
};
