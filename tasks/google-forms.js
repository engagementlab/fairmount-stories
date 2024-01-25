import dotenv from "dotenv";
import { writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import process from "node:process";

dotenv.config();

const apiUrl = process.env.API_URL;

let responsesTally = {};
let status = 0;

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
				console.error(res);
				return;
			}

			// Tally all responses
			res.msg.map((submission) => {
				if (!submission || !submission[0] || submission[0].length < 1) return;
				const responses = submission[0].split(", ");
				responses.forEach((choiceKey) => {
					// Response needs + in spaces to match client options map in PromptFLMeansToYou
					const keyFormatted = choiceKey.replaceAll(" ", "+");

					if (responsesTally[keyFormatted]) responsesTally[keyFormatted]++;
					else responsesTally[keyFormatted] = 1;
				});
			});

			// Sort responses by vote count descending to make it easy to display the top three on client
			responsesTally = Object.keys(responsesTally)
				.sort((a, b) => responsesTally[b] - responsesTally[a])
				.reduce((acc, key) => ((acc[key] = responsesTally[key]), acc), {});

			// Write the responses to JSON file
			rmSync(path.join(process.cwd(), "/src/data/responses.json"));
			writeFileSync(path.join(process.cwd(), '/src/data/responses.json'), JSON.stringify(responsesTally));
		})
		.catch((e) => {
			console.error(e);
		});
} catch(e) {
	console.error(e);
}
