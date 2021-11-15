const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("test btc"),
  async execute(interaction) {
    interaction.reply({ content: "test", ephemeral: true });
  },
};

