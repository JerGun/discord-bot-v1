const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('project2')
    .setDescription('Software Engineering Project II'),
  async execute(interaction) {
    let date3 = new Date('May 23 2022 00:00:00').getTime()
    let date4 = new Date('Jul 25 2022 00:00:00').getTime()
    let date5 = new Date('Sep 19 2022 00:00:00').getTime()
    let today = new Date().getTime()
    let remainingDate3 = Math.floor((date3 - today) / (1000 * 60 * 60 * 24))
    let remainingDate4 = Math.floor((date4 - today) / (1000 * 60 * 60 * 24))
    let remainingDate5 = Math.floor((date5 - today) / (1000 * 60 * 60 * 24))

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Software Engineering Project II')
      .setURL('https://bit.ly/3DNBqdB')
      .addFields(
        {
          name: 'สอบหัวข้อโปรเจค 2',
          value: `23 - 27 พ.ค. 2565 | ***เหลือ ${remainingDate3} วัน***`,
        },
        {
          name: 'นำเสนอความก้าวหน้าโปรเจค 2',
          value: `25 ก.ค. 2565 | ***เหลือ ${remainingDate4} วัน***`,
          inline: true,
        },
        {
          name: 'สอบจบโปรเจค 2',
          value: `19 ก.ย. 2565 | ***เหลือ ${remainingDate5} วัน***`,
        },
      )
      .setTimestamp()
      .setFooter(
        'pawaret.dev',
        'https://ipfs.infura.io/ipfs/QmUgwi4JkLBrau1QecUxs1y4u7N42D3eCpeUKDaX6rLkHc',
      )
    await interaction.deferReply({ ephemeral: false })
    await interaction.editReply({ embeds: [embed] })
  },
}
