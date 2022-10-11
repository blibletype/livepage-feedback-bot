const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: `suggestions`,
  },
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("suggestion-modal")
      .setTitle("Пропозиції щодо покращення");

    const textInput = new TextInputBuilder()
      .setCustomId("suggestionInput")
      .setLabel("Напишіть вашу пропозицію тут")
      .setRequired(true)
      .setStyle("Paragraph");

    const userInput = new TextInputBuilder()
      .setCustomId("suggestionUserInput")
      .setStyle("Short")
      .setLabel("Хто ви?")
      .setValue(interaction.user.username)
      .setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    modal.addComponents(new ActionRowBuilder().addComponents(userInput));
    await interaction.showModal(modal);
  },
};
