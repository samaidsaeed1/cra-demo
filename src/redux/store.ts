import { configureStore } from "@reduxjs/toolkit";
import { demoApi } from "../api/demoApi";

export const store = configureStore({
    reducer: {
        [demoApi.reducerPath]: demoApi.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat([demoApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>