const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: `problems-with-technics`,
  },
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("workplace-modal")
      .setTitle("Вирішення питань з технікою");

    const textInput = new TextInputBuilder()
      .setCustomId("workplaceInput")
      .setLabel("Опишіть вашу проблему")
      .setRequired(true)
      .setStyle("Paragraph");

    const userInput = new TextInputBuilder()
      .setCustomId("workplaceUserInput")
      .setStyle("Short")
      .setLabel("Хто ви?")
      .setValue(interaction.user.username)
      .setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    modal.addComponents(new ActionRowBuilder().addComponents(userInput));
    await interaction.showModal(modal);
  },
};
