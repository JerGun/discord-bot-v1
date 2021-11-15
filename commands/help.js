const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display the help menu"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Help Menu")
      .setDescription("**[]** - Required value\n**<>** - Optional value")
      .addFields(
        {
          name: "***General***",
          value:
            "**/help** - Display the help menu\n**/class <day>** - Show today's class or class on <su, mo, tu, we, th, fr, sa, tomorrow>",
        },
        {
          name: "***Cryptocurrency Price***",
          value:
            "**/btc** - Bitcoin Price\n\
      **/eth** - Ethereum Price\n\
      **/bnb** - Binance Coin Price\n\
      **/kub** - Bitkub Coin Price\n\
      **/ccar** - CryptoCars Price\n\
      **/lumi** - LUMI Price",
        }
      );
    await interaction.deferReply({ ephemeral: true });
    interaction.editReply({ embeds: [embed] });
  },
};
