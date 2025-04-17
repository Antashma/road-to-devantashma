import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
                
                return speciesResult.data ? {data: {pokemon, species: speciesResult.data}} : {error: speciesResult.error}
            }
        }),
    })
});

export const { 
    useLazyGetPokemonQuery,
} = pokemonApi;