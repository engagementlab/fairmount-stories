import path from "path";
import process from 'process';
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const CREDENTIALS_PATH = path.join(process.cwd(), "tasks/credentials.json");

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
    try {
        const res = await sheets.spreadsheets.get({
            spreadsheetId: "1LOyUMW0Rwwewz2l0nbc4tkxp2ZbiWfRIA_fbrtjDn10",
        });
        const rowCount = res.data.sheets[0].properties.gridProperties.rowCount;
        const resValues = await sheets.spreadsheets.values.get({
                        spreadsheetId: "1LOyUMW0Rwwewz2l0nbc4tkxp2ZbiWfRIA_fbrtjDn10",
                        range: `Form Responses 1!B2:D${rowCount}`
                    });
        const rows = resValues.data.values;
        if (!rows || rows.length === 0) {
            console.log("No data found.");
            return;
        }
        
        rows.filter(r => r[2] === 'Approved').forEach((row) => {
            console.log(row);
        });
    } catch (e) {
        console.error(e.errors);
    }
}

authorize().then(listRows).catch(console.error);
