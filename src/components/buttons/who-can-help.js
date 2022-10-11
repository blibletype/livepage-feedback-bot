module.exports = {
    data: {
      name: `who-can-help`,
    },
    async execute(interaction, client) {
      await interaction.reply({
        content: "She can help you",
        ephemeral: true
      });
    },
  };
  