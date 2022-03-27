const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("project1")
    .setDescription("Software Engineering Project I"),
  async execute(interaction) {
    let finalDate = new Date("Mar 22 2022 00:00:00").getTime();
    let today = new Date().getTime();
    let remaining = finalDate - today;
    let remainingDays = Math.floor(remaining / (1000 * 60 * 60 * 24));
    interaction.reply({
      embeds: [
        new MessageEmbed()
          .setColor("#FF0000")
          .setTitle(`${remainingDays} days left!`)
          .setDescription("Remaining days for the project")
          .setTimestamp(),
      ],
    });
  },
};