const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec } = require("child_process");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("project")
    .setDescription("Shows the number of days remaining to do the project."),
  async execute(interaction) {
    let finalDate = new Date("Mar 23 2022 00:00:00").getTime();
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
