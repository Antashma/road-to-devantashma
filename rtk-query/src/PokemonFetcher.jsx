import { useRef, useState } from "react";
import { useLazyGetPokemonQuery } from "./services/pokemonApi";


export default function PokemonFetcher() {
    const nameOrIdTextRef = useRef("");
    const [isDisabled, setIsDisabled] = useState(true)
    const [getPokemonTrigger, { data, error, isLoading }] = useLazyGetPokemonQuery();

    const handleClick = () => {
        const pokemonName = nameOrIdTextRef.current.value
        getPokemonTrigger(pokemonName);
    }

    const handleChange = () => {
        setIsDisabled(nameOrIdTextRef.current.value.length < 1)
    }

    
   

    return(
        <section>
            <p>Enter the name or id of the pokemon you would like to view in the textbox below. Hit the button to submit.</p>
            <input ref={nameOrIdTextRef} onChange={handleChange} type="text" id="nameOrId-txt" name="naemOrId-txt" placeholder="ditto" />
            <br />
            <button 
                onClick={handleClick}
                disabled={isDisabled}
            >
                Fetch that Pokemon!
            </button>

            { error && <p style={{color: "red"}}>Someting went wrong...</p> }
            { isLoading && <p style={{color: "gold"}}>Fetching data...</p> }
            { data && (
                <article>
                    <hr />
                    <h2>{data.pokemon.name}</h2>
                    <p>{data.species.genera.find(g => g.language.name === "en").genus}</p>
                    <img src={data.pokemon.sprites.front_default} />
                    <p>{data.species.flavor_text_entries.find(e => e.language.name === "en").flavor_text}</p>
                </article>
            )}
        </section>
    )
}