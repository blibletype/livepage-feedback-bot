const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: `anonimously-feedback`,
  },
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("feedback-modal")
      .setTitle("Анонімний фідбек");

    const textInput = new TextInputBuilder()
      .setCustomId("feedbackInput")
      .setLabel("Залиште ваш відгук тут")
      .setRequired(true)
      .setStyle("Paragraph");
    
    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    await interaction.showModal(modal);
  },
};
