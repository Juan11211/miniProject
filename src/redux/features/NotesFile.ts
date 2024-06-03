import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import APIS FROM ACTIONS 


type notesFileState = { 
    isLoading: boolean;
    // noAccess: boolean;
    response: any[];
    noteResponse: any;
    errorMsg: any; 
}

const initialState: notesFileState = {
    isLoading: false,
    //noAccess: false,
    response: [],
    noteResponse: [],
    errorMsg: ''
};

export const notesFileStateSlice = createSlice({
    name: 'noteState',
    initialState,
    reducers: {
        setNotes: (state: any, PayloadAction<any>){
            
        }
    }
})