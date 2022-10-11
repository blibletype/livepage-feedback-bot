module.exports = {
  data: {
    name: `useful-links`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "links",
      ephemeral: true
    });
  },
};
