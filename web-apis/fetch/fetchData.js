async function fetchData(name) {
    if (name.trim() === "") name = "ditto";

    const pkmBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const speciesBaseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

    try {
        const pkmResponse = await fetch(pkmBaseUrl + name.trim());

        
        if (!pkmResponse.ok) {
            throw Error(`Error getting pokemon data...please check pokemon name and try again.`);
        }

        const speciesResposne = await fetch(speciesBaseUrl + name.trim());

        if (!speciesResposne.ok) {
            throw Error(`Error getting pokemon dex data...please try again.`);
        }

        const pkmData = await pkmResponse.json();
        const speciesData = await speciesResposne.json();
        console.log({speciesData})

        const flavorText = speciesData.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text || "Dex entry not available.";

        const formatFlavorText = () => {
            const arr = [];
            flavorText.split(" ").forEach(word => {
                if (word.match(/[\n\f]/g)) {
                    const newWord = []
                    word.split("").forEach(c => {
                        if (c.match(/[\n\f]/g)) {
                            newWord.push(" ")
                        } else newWord.push(c)
                    })
                    arr.push(newWord.join(""));
                } else {
                    arr.push(word)
                }
            })
            const result = arr.join(" ");
            return result;
        }

        const formattedText = formatFlavorText();

        const genus = speciesData.genera.find(entry => entry.language.name === "en").genus || "Genus not available.";

        console.log({pkmData, genus, formattedText})
        createCard({ pkmData, genus, formattedText });

    } catch (err) {
        console.error(err);
    }
}