import React, { useRef, useState } from "react";

function Chapter({ sceneData, goToNextScene }) {

	const [currentLineIdx, setCurrentLineIdx] = useState(0);

	const promptInputValue = useRef("");

	const scene = sceneData[currentLineIdx];
	const text = scene.text;

	if (!sceneData) {
		return (
			<>
				<h1 className="chapter-title">Untitled</h1>
				<div className="card">
					<p>Something went wrong. This scene does not exist.</p>
				</div>
			</>
		);
	}

	const goToNextLineIdx = () => {
		setCurrentLineIdx(prevState => prevState + 1);
	}

	const goToSpecificLine = (lineName) => {
		const found = sceneData.find(line => line.title === lineName);
		setCurrentLineIdx(found.id);
	}

	const handlePromptSubmit = (promptData) => {
		const playerNameInput = promptInputValue.current.value.trim();

		if (!playerNameInput) {
			alert("Please enter a name.");
			return;
		}
		
		if (promptData.type === "store") {
			localStorage.setItem(promptData.value, playerNameInput);
		}
		goToNextLineIdx();
	}

	const handleChoiceClick = (choiceData) => {
		const { action, label } = choiceData;

		if (action.type === "store") {
			localStorage.setItem(action.value, label);
			goToNextLineIdx();
		} 

		if (action.type === "goto") {
			if (action.value.startsWith("scene")) {
				let sceneName = action.value.split(":")[1];
				goToNextScene(sceneName);
				setCurrentLineIdx(0);
			} 
			
			if (action.value.startsWith("line")) {
				let lineTitle  = action.value.split(":")[1];
				goToSpecificLine(lineTitle);
			}
		}

		if (action.type == "noact") goToNextLineIdx();
	};

	const renderText = (text) => {
		let words = text.split(" ");

		const result = [];
		for (let word of words) {
			if (word.startsWith("{{")) {
				let key = word.slice(2, word.indexOf("}"))
				let item = localStorage.getItem(key);
				let newWord = word.replace("{{", "").replace("}}", "").replace(key, item);
				result.push(newWord);
				
			} else {
				result.push(word);
			}
		}
		return result.join(" ");
	}

	return (
		<>
			<h1 className="chapter-title">EverAfter Goals</h1>
			<div className="card">
				<div className="content-block">
					<p className="content-border">
						{renderText(text)}
					</p>
					{scene.mode === "text" && currentLineIdx < sceneData.length - 1 && 
						<button id="content-next-btn" onClick={goToNextLineIdx}>▶</button>
					}
				</div>


				{scene.mode === "prompt" && scene.prompt.type === "store" && (
					<div className="prompt-box">
						<input type="text" placeholder="" name={scene.prompt.value} ref={promptInputValue} />
						<input type="button" value="Submit" onClick={() => handlePromptSubmit(scene.prompt)} />
					</div>
				)}


				
				{scene.mode === "choice" && scene.choices && 
					<div className="choices-box">
						{scene.choices.map((choice) => (
							<button
								className="choice-btn"
								key={choice.id}
								onClick={() => handleChoiceClick(choice)}
							>
								{choice.label}
							</button>
						))}
					</div>
				}
			</div>
		</>
	);
}


export default Chapter;
