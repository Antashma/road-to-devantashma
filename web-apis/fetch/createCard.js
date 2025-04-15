function createCard({ pkmData, genus, formattedText: flavorText }) {
    const section = document.querySelector("#result");

    const container = document.createElement("article");
    container.classList.add("card--container");
   
    const bgImgContainer = document.createElement("div");
    bgImgContainer.classList.add("bg-img");
    bgImgArr = [
        pkmData.sprites.other["official-artwork"].front_default,
        pkmData.sprites.other["official-artwork"].front_shiny,
    ]
    bgImgContainer.style.backgroundImage = `url(${bgImgArr[0]})`;

    const cardContents = document.createElement("div");
    cardContents.classList.add("card-contents");

    const leftContents = document.createElement("div");
    leftContents.classList.add("left");

    const rightContents = document.createElement("div");
    rightContents.classList.add("right");

    const pokeNameH2 = document.createElement("h2");
    pokeNameH2.textContent = pkmData.name;

    const pokeIdH3 = document.createElement("h3");
    pokeIdH3.textContent = `No. ${pkmData.id}`;

    const genusP = document.createElement("p");
    genusP.classList.add("genus");
    genusP.textContent = genus;

    const cryAudio = document.createElement("audio");
    cryAudio.src = pkmData.cries.latest;
    cryAudio.controls = true;
    cryAudio.autoplay = true;
    cryAudio.volume = 0.1;

    const fTextP = document.createElement("p");
    fTextP.textContent = flavorText;

    const spriteImg = document.createElement("img");
    const spriteSrcArr = [
        pkmData.sprites.front_default, 
        pkmData.sprites.front_shiny
    ]
    spriteImg.src = spriteSrcArr[0];

    spriteImg.addEventListener("click", (evt) => {
        if (evt.target.src === spriteSrcArr[0]) {
            evt.target.src = spriteSrcArr[1];
        } else {
            evt.target.src = spriteSrcArr[0];
        }
    })

    const typeDiv = document.createElement("div");
    typeDiv.classList.add("types-container")
    pkmData.types.forEach((t, index) => {
        const typeP = document.createElement("p");
        typeP.textContent = `${index === 1 ? "/" : ""}${t.type.name}`
        typeDiv.append(typeP);
    })

    const offLinkP = document.createElement("p");
    const offLinkA = document.createElement("a");
    offLinkA.href = "https://www.pokemon.com/us/pokedex/" + pkmData.id;
    offLinkA.target = "_blank";
    offLinkA.textContent = "View on Pokemon.com";

    offLinkP.append(offLinkA);

    leftContents.append(
        pokeIdH3, 
        typeDiv, 
        spriteImg
    );

    rightContents.append(
        genusP,
        cryAudio,
        fTextP,
        offLinkP
    );

    cardContents.append(
        pokeNameH2,
        leftContents,
        rightContents,
    )
    
    container.append(
        bgImgContainer,
        cardContents
    );

    section.prepend(container);
}

