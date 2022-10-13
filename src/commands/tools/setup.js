const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("setup the button menu"),
  async execute(interaction, client) {
    await interaction.deferReply({
      fetchReply: true,
      ephemeral: true,
    });

    const guild = interaction.guild;
    const menuChannel = await guild.channels
      .create({
        name: "menu",
      })
      .then((newChannel) => {
        return guild.channels.cache.find(
          (channel) => channel.id === newChannel.id
        );
      });

    menuEmbed = new EmbedBuilder().setTitle("🗃️ | Меню").addFields([
      {
        name: "\u200b",
        value: "\u200b",
      },
      {
        name: "🕵️ | Анонімний фідбек",
        value:
          ">>> Фідбек про існуючі процеси. Ми завжди покращуємо їх, можливо ти допоможеш нам у цьому.",
        inline: true,
      },
      {
        name: "💡 | Пропозиції щодо покращення",
        value:
          ">>> Якщо у тебе є ідея, або пропозиція щодо нового процесу, скоріш пиши.",
        inline: true,
      },
      {
        name: "💻 | Вирішення питань з технікою",
        value:
          ">>> Якщо тобі потрібна допомога з облаштуванням місця для роботи - пиши.",
        inline: true,
      },
      {
        name: "\u200b",
        value: "\u200b",
      },
      {
        name: "🗿 | Випадковий мем",
        value: "\u200b",
        inline: true,
      },
      {
        name: "🔗 | Список корисних посилань",
        value: "\u200b",
        inline: true,
      },
      {
        name: "🧑‍💼 | До кого звернутись",
        value: "\u200b",
        inline: true,
      },
    ]);

    const linkButton = new ButtonBuilder()
      .setCustomId("useful-links")
      .setLabel("🔗Посилання компанії")
      .setStyle(ButtonStyle.Success);
    const memButton = new ButtonBuilder()
      .setCustomId("random-meme")
      .setLabel("🗿Мем для настрою")
      .setStyle(ButtonStyle.Secondary);
    const whoCanHelpButton = new ButtonBuilder()
      .setCustomId("who-can-help")
      .setLabel("🧑‍💼До кого звернутись")
      .setStyle(ButtonStyle.Primary);
    const anonFeedbackButton = new ButtonBuilder()
      .setCustomId("anonimously-feedback")
      .setLabel("🕵️‍♀️Анононімний фідбек")
      .setStyle(ButtonStyle.Danger);
    const suggestionsButton = new ButtonBuilder()
      .setCustomId("suggestions")
      .setLabel("💡Ідея для покращення")
      .setStyle(ButtonStyle.Primary);
    const problemsWithTechnicsButton = new ButtonBuilder()
      .setCustomId("problems-with-technics")
      .setLabel("💻Техніка для роботи")
      .setStyle(ButtonStyle.Success);

    const buttonRow1 = new ActionRowBuilder().addComponents(
      anonFeedbackButton,
      suggestionsButton,
      problemsWithTechnicsButton
    );
    const buttonRow2 = new ActionRowBuilder().addComponents(
      memButton,
      linkButton,
      whoCanHelpButton
    );
    await menuChannel.send({
      embeds: [menuEmbed],
      components: [buttonRow1, buttonRow2],
    });

    embed = new EmbedBuilder()
      .setTitle("✅ | Successful")
      .setColor([238, 75, 43])
      .setDescription(`You can check this channel now - ${menuChannel}`)
      .setTimestamp(Date.now());
    await interaction.editReply({
      embeds: [embed],
    });
  },
};
