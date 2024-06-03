/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllNotes } from '../actions/notesActions';

// interface Note {
//     id: string;
//     title: string;
//     body: string;
// }
  
  
type NotesState = {
  isLoading: boolean;
  response: any;
  errorMsg: string;
  note: any;
  allNotes: any;
  notesById: { [key: string]: any };
};

const initialState: NotesState = {
    isLoading: false,
    response: [],
    errorMsg: '',
    note: [],
    allNotes: [],
    notesById: {},
};

const notesSetStateSlice = createSlice({
  name: 'notesState',
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<any>) => {
      state.allNotes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNotes.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.response = action.payload;
        state.allNotes = action.payload;
      })
      .addCase(getAllNotes.rejected, (state: any, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.errorMsg = action.payload;
      });
  },
});

export const { setNotes } = notesSetStateSlice.actions;
export default notesSetStateSlice.reducer;
