const { InteractionType } = require('discord.js');

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
      if (interaction.isChatInputCommand()) {
        const { commands } = client;
        const { commandName } = interaction;
        const command = commands.get(commandName);
        if (!command) return;
  
        try {
          await command.execute(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({
            content: `Something went wrong while executing this command...`,
            ephemeral: true,
          });
        }
      } else if (interaction.isButton()) {
        const { buttons } = client;
        const { customId } = interaction;
        const button = buttons.get(customId);
        if (!button) return new Error('This button doesn\'t exist');
        try {
          await button.execute(interaction, client);
        } catch (err) {
          console.error(err);
        }
      } else if (interaction.type == InteractionType.ModalSubmit) {
        const { modals } = client;
        const { customId } = interaction;
        const modal = modals.get(customId);
        if (!modal) return new Error('This modal doesn\'t exist');
        try {
          await modal.execute(interaction, client);
        } catch (error) {
          console.error(error);
        }
      }
    },
  };
  