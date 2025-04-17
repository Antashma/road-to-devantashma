import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemonApi";
import historyReducer from "./state/historySlice";


export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        history: historyReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pokemonApi.middleware),
});