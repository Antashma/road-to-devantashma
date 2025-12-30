import { useEffect, useState } from "react";

import { parseMarkdown } from "./utils/parseMarkdown";

import Chapter from "./components/Chapter";
import History from "./pages/History";

import scenes, { sceneSelector } from "./pages/EverAfterTest"

import "./App.css";

const initialSceneData = parseMarkdown(scenes.preintro);


function App() {
	const [sceneData, setSceneData] = useState(initialSceneData);
	const [history, setHistory] = useState([]);

	const updateHistory = (contentData) => {
		setHistory(prevState => [...prevState, contentData])
	}

	const toggleHistory = () => {
		document.querySelector("#history").classList.toggle("show");
	}

	const goToNextScene = (nextSceneName) => {
		const selected = sceneSelector(nextSceneName);
		const parsedScene = parseMarkdown(selected);
		setSceneData(parsedScene);
	}


	return (
		<div id="app-root">
			<Chapter sceneData={sceneData} goToNextScene={goToNextScene} />
			<section id="controls">
				<button id="previous-btn">Previous</button>
				<button id="save-btn">Save</button>
				<button id="load-btn">Load</button>
				<button id="toggle-history-btn" onClick={toggleHistory}>Toggle History</button>
			</section>
			<History historyData={history} />
		</div>
  );
}


export default App;
