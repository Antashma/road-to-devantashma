import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addToHistory } from "../state/historySlice";


export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        getPokemon: builder.query({
            // query: (nameOrId) => `pokemon/${nameOrId}`,
            async queryFn(nameOrId, _queryApi, _extraOptions, fetchWithBQ) {
                const pokemonResult = await fetchWithBQ(`pokemon/${nameOrId}`);
                
                if (pokemonResult.error) return {error: pokemonResult.error}
                
                const pokemon = pokemonResult.data;

                const speciesResult = await fetchWithBQ(`pokemon-species/${pokemon.id}`);
                
                if (speciesResult.error) return {error: speciesResult.error}

                const species = speciesResult.data;
                
                return {data: {pokemon, species}}
            },
            async onQueryStarted(nameOrId, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(addToHistory(data.pokemon.name))
                } catch(err) {
                    console.error(err)
                }
            },
        }),
    })
});

export const { 
    useLazyGetPokemonQuery,
} = pokemonApi;