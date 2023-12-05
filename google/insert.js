import { google } from "googleapis";
import uniqid from "uniqid";

const credentials = "./absensi-400104-30ff659410d7.json";

export const inputData = async (absen, nama, waktu) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // client
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  // spreadsheet id
  const spreadsheetId = "15zHxBbytC_uw373aKfEzmL_Tpo3RAeqFP1SCk5Yrq80";

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A1:E1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[absen, nama, waktu, "masuk",uniqid()]],
    },
  });
};
