import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getAllNotes } '@/actions/notesActions'

type notesState = {
    isLoading: boolean;
    response: any;
    errorMsg: any;
    note: any;
    allNotes: any;
    notesById: {[key: string]: any};


};

const initialState: notesState = {
    isLoading: false,
    response: [],
    errorMsg: '',
    note: [],
    allNotes: [],
    notesById: {} 
};

export const notesStateSlice = createSlice({
    name: 'notesState',
    initialState,
    reducers: {
        setNotes: (state: any, action: PayloadAction<any>) => {
            state.response = action.payload;
        }
    },
    extraReducers(builder){
        builder 
            .addCase(getAllNotes.pending, (state: any) => {

            })
    }
})