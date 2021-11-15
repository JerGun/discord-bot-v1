const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display the help menu"),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    interaction.editReply({ content: "Coming Soon!", ephemeral: true });
  },
};
