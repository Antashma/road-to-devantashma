const LOLA_TEST_SCENES = {
	title: "LOLU -- Incognito Redux (Part 1)",
	chapterNo: 1,
	intro: {
		id: "intro",
		content: [
            {
                label:"",
                isThought: false, 
                text: "With Errol’s help, Lola (half reluctant, half trying to be thrilled) pretends to be a palace maid (with the outfit she had requested from Lucian as a gift) to surprise Lucian during a busy day for him."
            },
            {
                label: "Lola",
                isThought: false, 
                text: "Your tea...uh—",
                choices: [
                    {
                        id: "intro-casual",
                        label: '"Lucian"',
                        next: "useCasual"
                    },
                    {
                        id: "intro-proper",
                        label: "\"Your Highness.\"",
                        next: "useProper"
                    }
                ]
            }
		],
	},

	useCasual: {
		id: "useCasual",
		content: [
            {
                label: "Lola",
                text: 'Lucian...uh!'
            },
            {
                label: "Lola",
                isThought: true, 
                text: 'Shoot! Not Lucian! Title!'
            },
            {
                label: "Lola",
                text: 'I mean...Prince Lucian...',
                choices: [
                    {
                        id: "continue",
                        label: "Continue",
                        next: "continue01",
                    },
                ]
            }
		],
	},
	useProper: {
		id: "useProper",
		content: [
            {
                label: "Lola",
                isThought: true, 
                text: 'No! Not Lucian! Title!'
            },
            {
                label: "Lola",
                isThought: false, 
                text: "...Your Highness.",		
                choices: [
                    {
                        id: "continue",
                        label: "Continue",
                        next: "continue01",
                    },
                ]
            }
		],
	},

	continue01: {
		id: "continue01",
		content: [

            {
                text:"Then, Lucian looked up."
            },
            {
                label:"Lola",
                isThought: true,
                text: "He's…aghast? Was that a word he would use to describe his face now?"
            },
            {
                text: "It was rare to see him, the most poised of people, unpoised. Just from seeing her."
            },
            {
                label: "",
                text: "The whole plan she drafted up with Errol, it seemed fun and she thought it would be a nice gesture underneath the trick. But she had her doubts--it wasn't something she'd normally do."
            },
            {
                label: "Lola",
                isThought: true,
                text: "Well...imagine, yeah, but..." 
            },
            {
                text: "Now as she looked at him, no matter what happened before this moment—tripping on the carpet, knocking on the wrong door—it felt like it didn't matter, seeing his reaction. And the way his eyes searched her face..."
            },
            {
                label: "Lola",
                isThought: true,
                text: "Yes! It's me!"
            },
            {
                text: "She thought it as loudly as she could."
                
            },
            {
                text: "And then when his eyes examined the maid outfit—was he silently regretting giving it to her? She never planned to use it like this when she asked for it but—"            
            },
            {
                label: "Lucian",
                text: "Char—ah...ha." 
            },
            {
                text: "Lucian stopped, his laugh was comically forced. He was most likely remembering that was still in the middle of a meeting, and then cleared his throat."
            },
            {
                text: "She was blushing and she had to hold back the giddy smile Errol was already failing to do behind him. "
            },
            {
                text: "After Lucian took a breath that moved his shoulders, he smiled then, poised and practiced as his form was once again."
            },
            {
                label: "Lucian",
                text: "Precisely what I needed now. Darjeeling?",
                choices: [
                    {
                        id: "go-to-ending",
                        label: "Continue",
                        next: "ending"
                    }
                ]
            },

		],
	},
	ending: {
		id: "ending",
		content: [
            {
                text: "To be continued...",
                choices: [
                    {
                        id: "restart",
                        label: "Restart Chapter One",
                        next: "intro"
                    }
                ]
            }
		],
	}
};

export default LOLA_TEST_SCENES;