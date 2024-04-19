import dotenv from "dotenv";
import {
	writeFileSync,
	rmSync
} from "node:fs";
import path from "node:path";
import process from "node:process";

dotenv.config();

const apiUrl = process.env.API_URL;

let responsesTally = {};
let status = 0;

const PromptFLOutput = (res) => {
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
	writeFileSync(
		path.join(process.cwd(), "/src/data/responses/PromptFLMeansToYou.json"),
		JSON.stringify(responsesTally), {
			flag: "w+"
		}
	);
}

const PromptEJMeanToYouOutput = (res) => {

	let arrCleaned = res.msg.map((row) => {
		return [row[0], row[1]];
	});

	// Write the responses to JSON file
	writeFileSync(
		path.join(process.cwd(), "/src/data/responses/PromptEJMeanToYou.json"),
		JSON.stringify(arrCleaned),
		{
			flag: "w+"
		}
	); 
	
}

const FetchSpreadsheet = (id, callback) => {
	try {
		// Send as an opaque request, so our cloud accepts;
		// A successful response will be code 0, not 200 as is expected
		fetch(
				`${apiUrl}&spreadsheetId=${id}`, {
					mode: "no-cors"
				}
			)
			.then((response) => {
				status = response.status;
				return response.json();
			})
			.then((res) => {
				if (status === 500 || status === 404) {
					console.error(res.msg.errors[0]);
					return;
				}
				callback(res);
			})
			.catch((e) => {
				console.error(e);
			});
	} catch (e) {
		console.error(e);
	}
}

FetchSpreadsheet(
	"1JOI70LGU34bC7tAVcePUH2TOEQfhcqppz9vBOpUjsyI",
	PromptFLOutput
);
FetchSpreadsheet(
	"1LOyUMW0Rwwewz2l0nbc4tkxp2ZbiWfRIA_fbrtjDn10",
	PromptEJMeanToYouOutput
);
