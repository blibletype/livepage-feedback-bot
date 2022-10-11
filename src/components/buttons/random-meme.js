const axios = require("axios");

module.exports = {
    data: {
      name: `random-meme`,
    },
    async execute(interaction, client) {
      const url = await axios.get('https://meme-api.herokuapp.com/gimme').then(res => {
        return res.data.url;
      });
      await interaction.reply({
        files: [url],
        ephemeral: true
      });
    },
  };
  