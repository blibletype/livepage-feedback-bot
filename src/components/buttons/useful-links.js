const { EmbedBuilder } = require('discord.js')

module.exports = {
  data: {
    name: `useful-links`,
  },
  async execute(interaction, client) {
    embed = new EmbedBuilder()
    .addFields([
      {
        name: "Livepage",
        value: "https://livepage.ua/\n\u200b",
      },
      {
        name: "Livepage Careers",
        value: "https://livepage.ua/careers/\n\u200b",
      },
      {
        name: "LMS Livepage",
        value: "https://lms.livepage.net/\n\u200b",
      },
      {
        name: "DOU Livepage",
        value: "https://jobs.dou.ua/companies/livepage/\n\u200b",
      },
      {
        name: "LinkedIn Livepage",
        value: "https://www.linkedin.com/company/livepage/\n\u200b",
      },
      {
        name: "Facebook Livepage",
        value: "https://www.facebook.com/livepage\n\u200b",
      },
      {
        name: "Instagram Livepage",
        value: "https://www.instagram.com/livepage.pro/\n\u200b",
      },
    ])
    await interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};
