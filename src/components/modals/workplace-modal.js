const { EmbedBuilder } = require("discord.js");
const { writeRow } = require("../../googleSreadsheetsAPI.js");

module.exports = {
  data: {
    name: "workplace-modal",
  },
  async execute(interaction, client) {
    const workplace = interaction.fields.getTextInputValue("workplaceInput");
    const user = interaction.fields.getTextInputValue("workplaceUserInput");
    const re = new RegExp("workplace");
    const workplaceChannel = await interaction.guild.channels.cache.find(
      (channel) => {
        return re.test(channel.name);
      }
    );
    const re1 = new RegExp("hr");
    const role = await interaction.guild.roles.cache.find(
      (role) => {
        return re1.test(role.name.toLowerCase());
      }
    );
    if (!workplaceChannel) {
      await interaction.reply({
        content: "Не можу знайти канал workplace(((",
        ephemeral: true,
      });
    } else {
      embed = new EmbedBuilder()
        .setDescription(`${role}\n${workplace}`)
        .setTitle(user)
        .setTimestamp(Date.now());

      await workplaceChannel.send({
        embeds: [embed],
      });

      await interaction.reply({
        content: "Твій запит отримано, відповімо якнайшвидше!",
        ephemeral: true,
      });

      writeRow(
        '1-eoLDkfJQY4f_4Mo9t_ZMyzMHKKkFGQULXe1AyQ4uaA',
        'Аркуш1!A:B',
        [[user, workplace]]
      );
    }
  },
};
