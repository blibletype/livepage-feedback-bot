const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Return my ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
      ephemeral: true,
    });
    embed = new EmbedBuilder()
      .addFields([
        {
          name: "API Latency:",
          value: `${client.ws.ping}`,
          inline: false,
        },
        {
          name: "Client Ping:",
          value: `${
            message.createdTimestamp - interaction.createdTimestamp
          } ms`,
          inline: false,
        },
      ])
      .setTimestamp(Date.now());
    await interaction.editReply({
      embeds: [embed],
    });
  },
};
