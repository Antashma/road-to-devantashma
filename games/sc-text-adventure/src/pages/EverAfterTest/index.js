import preintro from "./scenes/preintro.md?raw";
import introP1 from "./scenes/introP1.md?raw";
import introP2 from "./scenes/introP2.md?raw";


export const sceneSelector = (sceneName) => {
    let selected;

    switch(sceneName) {
        case "preintro":
            selected = preintro;
            break;
        case "introP1":
            selected = introP1;
            break;
        case "introP2":
            selected = introP2;
            break;
        default:
            break;
    }

    return selected;
}


export default {
    preintro,
    introP1,
    introP2,
}