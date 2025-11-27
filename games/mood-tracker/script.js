const moods = [
  {
    name: "happy",
    kaomojis: ["^o^", "(●'◡'●)", "^_____^"],
    speech: ["This is great!", "Hehehe!"],
  },
  {
    name: "loving",
    kaomojis: ["(❁´◡`)", "(✿◡‿◡)", "( UwU)"],
    speech: ["I'm so proud of you!", "D'aww..."],
  },
  {
    name: "sad",
    kaomojis: [, "( ಠ╭╮ಠ)"],
    speech: ["Aww, man...", "This sucks..."],
  },
  {
    name: "tired",
    kaomojis: ["( X﹏X)", "(＞︿＜)", "(;′⌒`)"],
    speech: ["Zzz...", "When's bedtime?"],
  },
  {
    name: "suprised",
    kaomojis: ["( °Д °)", "( o_o)", "( O.O) !"],
    speech: ["What the what???", "Huh?!?"],
  },
  {
    name: "angry",
    kaomojis: ["(︶^︶)", '(¬_¬")', "╰（‵□′）╯"],
    speech: ["Grr...", "Hmph!"],
  },
  {
    name: "scared",
    kaomojis: ["щ(ʘ╻ʘ)щ", "{{{(>_<)}}}", "(。﹏。*)"],
    speech: ["...", "I don't like this..."],
  },
];

const bunnyArt = {
  happy: ["(\\___/)", "( ●^◡^)"],
  loving: ["(\\___/)", "(✿◡‿◡)"],
  sad: ["(\\___/)", "( ಠ╭╮ಠ)"],
  tired: ["(\\___/)", "(;′⌒`)"],
  angry: ["(\\___/)", "( ︶^︶)"],
  scared: ["(\\___/)", "( ;o╻o)!!"],
  suprised: ["(\\___/)", "(o . o)?!"],
};

function getMood(name) {
  const moodData = moods.find((m) => m.name === name);
  return moodData;
}

const currentMood = getMood("happy");

const bunnyCard = document.querySelector("#bunny-art");

//SET MOOD
const setMoodBtn = document.querySelector("#set-mood-btn");

function changeMood() {
  bunnyCard.innerHTML = "";
  const cmRadioButtons = document.querySelectorAll("input[name=current-mood]");
  for (btn of cmRadioButtons) {
    if (btn.checked) {
      const currentMood = getMood(btn.id);
      bunnyArt[currentMood.name].forEach((layer) => {
        let layerDOM = document.createElement("p");
        layerDOM.textContent = layer;
        bunnyCard.append(layerDOM);
      });

      const moodNameDOM = document.querySelector("#mood-name");
      moodNameDOM.textContent = currentMood.name;

      const speechBubbleDOM = document.querySelector("#speech-bubble");
      speechBubbleDOM.textContent = `"${currentMood.speech[0]}"`;
      speechBubbleDOM.style.fontWeight = "bold";
    }
  }
}

setMoodBtn.addEventListener("click", () => changeMood());
