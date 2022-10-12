const { EmbedBuilder } = require('discord.js');
const { writeRow } = require("../../googleSreadsheetsAPI.js");
require("dotenv").config();

const { feedbackSpreadsheetId } = process.env;

module.exports = {
  data: {
    name: "feedback-modal",
  },
  async execute(interaction, client) {
    const feedback = interaction.fields.getTextInputValue("feedbackInput");
    const re = new RegExp("feedback");
    const feedbackChannel = await interaction.guild.channels.cache.find(
      (channel) => {
        return re.test(channel.name);
      }
    );
    if (!feedbackChannel) {
      await interaction.reply({
        content: "Не можу знайти канал feedback(((",
        ephemeral: true,
      });

    } else {

      embed = new EmbedBuilder()
      .setDescription(feedback)
      .setTimestamp(Date.now())
      await feedbackChannel.send({
        embeds: [embed]
      });

      await interaction.reply({
        content: "Дякуємо за ваш Feedback!!!",
        ephemeral: true,
      });

      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const date = today.toLocaleDateString();
      writeRow(
        feedbackSpreadsheetId,
        'Лист1!B2:C1000',
        [[date, feedback]]
      );
    }
  },
};
