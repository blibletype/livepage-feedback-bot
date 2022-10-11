const { EmbedBuilder } = require('discord.js');

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
    }
  },
};
