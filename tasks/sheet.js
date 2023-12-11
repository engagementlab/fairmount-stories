import path from "path";
import process from 'process';
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * request or authorization to call APIs.
 */
async function authorize() {
    const client = new google.auth.GoogleAuth({
			keyFile: CREDENTIALS_PATH,
			scopes: SCOPES
		});
		
	return client;
}

/**
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function listRows(auth) {
	const sheets = google.sheets({ version: "v4", auth });
	const res = await sheets.spreadsheets.values.get({
		spreadsheetId: "1LOyUMW0Rwwewz2l0nbc4tkxp2ZbiWfRIA_fbrtjDn10",
		range: "Form Responses 1!D1:D111"
	});
	const rows = res.data.values;
	if (!rows || rows.length === 0) {
		console.log("No data found.");
		return;
	}

	rows.forEach((row) => {
		console.log(row);
	});
}

authorize().then(listRows).catch(console.error);
