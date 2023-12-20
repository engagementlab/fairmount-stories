import dotenv from "dotenv";
import { writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

dotenv.config();
let responsesTally = {};

let status = 0;
const apiUrl = `https://go.elab.works/api/FairmountStories?code=${process.env.AZURE_API_AUTH_CODE}&spreadsheetId=1JOI70LGU34bC7tAVcePUH2TOEQfhcqppz9vBOpUjsyI`;
try {
	// Send as an opaque request, so our cloud accepts;
	// A successful response will be code 0, not 200 as is expected
	fetch(apiUrl, {
		mode: "no-cors"
	})
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((res) => {
			if (status === 500 || status === 404) {
				// set({
				// 	error: true
				// });
				return;
			}

			res.msg.map((submission) => {
				if (!submission || !submission[0] || submission[0].length < 1) return;
				const responses = submission[0].split(", ");
				responses.forEach((choiceKey) => {
					if (responsesTally[choiceKey]) responsesTally[choiceKey]++;
					else responsesTally[choiceKey] = 1;
				});
			});

			writeFileSync(path.join(process.cwd(), '/src/data/responses.json'), JSON.stringify(responsesTally));
		})
		.catch((e) => {
			console.error(e);
		});
} catch {
	// set({
	// 	error: true,
	// 	msg: e
	// });
}
