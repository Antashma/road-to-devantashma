const REL_CH3_SCENES = {
	title: "Relenia and the Pirate's Promise",
	chapterNo: 1,
	intro: {
		id: "intro",
		title: "The Cherub",
		text: [
			"You find yourself in front of house and gingerly knock on the hardwood door. Is this really where that girl lived?  You are reminded of you first meeting with her all those yers ago and think and doubt your decision to re-connect with her.",
			"Would she really be willing to give you info of Ivan's whereabouts?"
		],
		choices: [
			{
				id: "intro-doubt",
				label: "Leave and find another lead",
				next: "cherubAppears"
			},
			{
				id: "intro-persist",
				label: "Stay and see how things turn out",
				next: "cherubAppears"
			}
		]
	},

	cherubAppears: {
		id: "figureAppears",
		text: [
			"Just as you made your decision, the door opens.",
			"The girl hadn't aged a bit.",
		],
		choices: [
			{
				id: "approach-challenge",
				label: "Raise your hand and challenge the creature",
				next: "approachChoice",
				meta: { approach: "aggressive" }
			},
			{
				id: "approach-talk",
				label: "Speak to it calmly",
				next: "approachChoice",
				meta: { approach: "calm" }
			}
		]
	},

	approachChoice: {
		id: "approachChoice",
		title: "Standing Before the Monstrous Figure",
		text: [
			"The creature’s presence crushes the air around you. Its eyes burn like embers in a furnace helm.",
			"Words scrape against your mind, not spoken but imposed: 'You should not be here, priestess.'",
			"Instinct tells you this encounter must be resolved by battle… yet the outcome feels heavier than a simple victory or defeat."
		],
		choices: [
			{
				id: "go-to-battle",
				label: "Steel yourself for battle",
				next: "battle"
			}
		]
	},

	battle: {
		id: "battle",
		title: "Dream Duel: Astaroth",
		isBattle: true,
		text: [
			"The dream shifts. Stone forms beneath your feet: a brutal arena suspended in a starless sky.",
			"The monstrous figure solidifies into a hulking warrior—Astaroth, an embodiment of ruin.",
			"You sense the rules of this encounter crystallizing around you.",
			"To continue the story, you must now fight this battle in Soul Calibur."
		],
		battleInstructions: [
			"Open Soul Calibur (V or VI).",
			"Go to VS Mode.",
			"Choose your created character as Jade.",
			"Set your opponent to Astaroth.",
			"Battle Conditions: default weapons, ring outs are NOT allowed."
		],
		choices: [
			{
				id: "battle-win",
				label: "I WON the fight against Astaroth",
				next: "winScene"
			},
			{
				id: "battle-lose",
				label: "I LOST the fight against Astaroth",
				next: "loseLoop"
			}
		]
	},

	loseLoop: {
		id: "loseLoop",
		title: "The Dream Resets",
		text: [
			"As Astaroth’s blow lands, the world shatters like glass.",
			"You expect pain… but instead, you are standing once more in the moonlit void.",
			"The monstrous figure steps out of the dark again, exactly as before.",
			"Time folds back on itself. The dream is looping, demanding a different outcome."
		],
		choices: [
			{
				id: "loop-back",
				label: "Face the monstrous figure again",
				next: "battle"
			}
		]
	},

	winScene: {
		id: "winScene",
		title: "Falling Giant",
		text: [
			"Your final strike cleaves through the dream. Astaroth staggers, roaring in disbelief.",
			"The hulking body collapses, the arena trembling beneath the weight. Cracks of light rip through the void.",
			"Then the corpse unravels—flesh, armor, and bone dissolving into swirling shadow-smoke."
		],
		choices: [
			{
				id: "go-to-ending",
				label: "Watch what happens next",
				next: "ending"
			}
		]
	},

	ending: {
		id: "ending",
		title: "The Message in the Smoke",
		text: [
			"The shadow-smoke surges toward you before you can move.",
			"It crashes over you like a black tide, plunging into your lungs, your veins, your thoughts.",
			"A voice whispers inside your skull—layered, distant, and horribly clear:",
			"“Wake, priestess. The Queen’s fate has already shifted.”",
			"You jolt awake in your chamber, heart pounding, hands shaking.",
			"Priestesses do not dream. And yet you have.",
			"You must speak to the Queen."
		],
		choices: [
			{
				id: "restart",
				label: "Restart Chapter One",
				next: "intro"
			}
		]
	}
};

export default REL_CH3_SCENES;