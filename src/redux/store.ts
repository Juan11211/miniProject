import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import notesSetStateSlice from "../redux/features/noteSlice";

const reducer = combineReducers({
    notesSetStateSlice: notesSetStateSlice
})

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 