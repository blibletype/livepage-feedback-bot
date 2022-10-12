const { google } = require("googleapis");

module.exports = {
  async writeRow(spreadsheetId, range, values) {
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: range,
      valueInputOption: "RAW",
      resource: {
        values: values,
      },
    });
  },
};
