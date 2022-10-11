const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "suggestion-modal",
  },
  async execute(interaction, client) {
    const suggestion = interaction.fields.getTextInputValue("suggestionInput");
    const user = interaction.fields.getTextInputValue("suggestionUserInput");
    const re = new RegExp("upgrade");
    const upgradeChannel = await interaction.guild.channels.cache.find(
      (channel) => {
        return re.test(channel.name);
      }
    );
    if (!upgradeChannel) {
      await interaction.reply({
        content: "Не можу знайти канал upgrade(((",
        ephemeral: true,
      });
    } else {
      embed = new EmbedBuilder()
        .setDescription(suggestion)
        .setTitle(user)
        .setTimestamp(Date.now());

      await upgradeChannel.send({
        embeds: [embed],
      });

      await interaction.reply({
        content: "Дякуємо за пропозицію!",
        ephemeral: true,
      });
    }
  },
};
