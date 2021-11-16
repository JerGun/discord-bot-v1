const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("class")
    .setDescription("Show today's class")
    .addStringOption((option) =>
      option.setName("day").setDescription("Day of the Week or Tomorrow")
    ),
  async execute(interaction) {
    let embed;
    let date = new Date();
    date.setHours( date.getHours() + 7 );
    let today = date.getDay();

    console.log(`Date: ${date}, ${today}`);

    if (interaction.options.getString("day") === "tomorrow") {
      today += 1;
    }
    if (interaction.options.getString("day") === "yesterday") {
      today -= 1;
    }
    if (today === 0 || interaction.options.getString("day") === "su") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Sunday Class!")
        .setDescription("No class today")
        .setTimestamp();
    }
    if (today === 1 || interaction.options.getString("day") === "mo") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Monday Class!")
        .addField(
          "225351[2] Computer and Network Security",
          "⏲️ 15.00 - 17.00\n🧑‍🏫 ดร.ธนภณ ถิรดาธนภัทรเดชา"
        )
        .setTimestamp();
    }
    if (today === 2 || interaction.options.getString("day") === "tu") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Tuesday Class!")
        .addFields(
          {
            name: "227372[1] Software Processes",
            value: "⏲️ 09.00 - 12.00\n🧑‍🏫 นายณัฐพล หาญสมุทร",
          },
          {
            name: "225351[2] Computer and Network Security",
            value: "⏲️ 13.00 - 15.00\n🧑‍🏫 ดร.ธนภณ ถิรดาธนภัทรเดชา",
          },
          {
            name: "227423[2] Preparation for Software Engineering Professional Experience",
            value:
              "⏲️ 15.00 - 17.00\n🧑‍🏫 นายเชาวน์ ปอแก้ว\n🧑‍🏫 นายณัฐพล หาญสมุทร\n🧑‍🏫 ผศ.ดร.ธีระยุทธ ทองเครือ\n🧑‍🏫 ผศ.ดร.บวรศักดิ์ ศรีสังสิทธิสันติ\n🧑‍🏫 ผศ.ดวิษ แสนโภชน์",
          }
        )
        .setTimestamp();
    }
    if (today === 3 || interaction.options.getString("day") === "we") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Wednesday Class!")
        .addField(
          "227481[2] Software Quality and Measurement",
          "⏲️ 13.00 - 16.00\n🧑‍🏫 นายณัฐพล หาญสมุทร"
        )
        .setTimestamp();
    }
    if (today === 4 || interaction.options.getString("day") === "th") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Thursday Class!")
        .addFields({
          name: "227474[1] Software Evolution and Maintenance",
          value: "⏲️ 13.00 - 16.00\n🧑‍🏫 ผศ.ดวิษ แสนโภชน์",
          name: "227321[2] Software Engineering Project I",
          value:
            "⏲️ 16.00 - 19.00\n\n🧑‍🏫 นายเชาวน์ ปอแก้ว\n🧑‍🏫 นายณัฐพล หาญสมุทร\n🧑‍🏫 ผศ.ดร.ธีระยุทธ ทองเครือ\n🧑‍🏫 ผศ.ดร.บวรศักดิ์ ศรีสังสิทธิสันติ\n🧑‍🏫 ผศ.ดวิษ แสนโภชน์",
        })
        .setTimestamp();
    }
    if (today === 5 || interaction.options.getString("day") === "fr") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Friday Class!")
        .setDescription("No class today")
        .setTimestamp();
    }
    if (today === 6 || interaction.options.getString("day") === "sa") {
      embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Sunday Class!")
        .setDescription("No class today")
        .setTimestamp();
    }
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
