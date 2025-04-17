import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemonApi";

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pokemonApi.middleware),
})