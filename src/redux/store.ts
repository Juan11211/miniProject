import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"

const reducer = combineReducers({
    notesStateSlice: notesStateSlice
})

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 