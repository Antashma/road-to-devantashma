export function parseMarkdown(raw) {
	const rawLines = raw.split("\n");
	let lineId = 0;
	let parsedLine = null;
	const result = [];

	function commitParsedLine() {
		if (!parsedLine) return;

		parsedLine.text = (parsedLine.text || "").trim();
		parsedLine.prompt = parsedLine.prompt || {};
		parsedLine.choices = parsedLine.choices || [];
		parsedLine.title = parsedLine.title.trim() || "";

		result.push(parsedLine);

		//RESET
		parsedLine = null;
	}

	for (let rawLine of rawLines) {
		let line = rawLine.trim();

		if (!line) continue;

		if (line.startsWith("#")) {
			commitParsedLine();

			parsedLine = {
				id: lineId++,
				title: line.replace("#", ""),
				mode: "text",
				text: "",
				prompt: {},
				choices: []
			}

			continue;
		}

		if  (line.startsWith("::prompt")) {
			parsedLine.mode = "prompt";
			continue;
		}

		if  (line.startsWith("::choice")) {
			parsedLine.mode = "choice";
			continue;
		}

		if (parsedLine.mode === "prompt") {
			let [ prompText, promptAction ] = line.split(" -> ")
			parsedLine.text = prompText;
			let [ type, value ] = promptAction.split(" ");
			parsedLine.prompt = { type, value };
		}

		if (parsedLine.mode === "choice") {
			if (isNaN(line[0])) {
				parsedLine.text = line
			} else {
				let [numAndLabel, choiceAction] = line.split(" -> ");
				
				let [choiceId, ...choiceLabel] = numAndLabel.split(" ");
				let [choiceActionType, choiceActionValue] = choiceAction.split(" ");
				
				parsedLine.choices.push({
					id: Number(choiceId.replace(".", "")), 
					label: choiceLabel.join(" "), 
					action: { type: choiceActionType, value: choiceActionValue }
				});
			}
			continue;
		}

		if (parsedLine.mode === "text") {
			parsedLine.text = line;
		}
	}

	commitParsedLine();

	return result;
}

