import { apiRequest } from './apiCalls';
import { createAsyncThunk } from "@reduxjs/toolkit"



const baseURL = `https://jsonplaceholder.typicode.com/posts`;

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-Requestd-With, content-type, Authorization', 'Access-Control-Allow-Credentials': true,
        }
}

// export const getAllNotes = createAsyncThunk(
//     'get/allnotes',
//     async(_, thunkAPI: any) => {
//         try{
//             const { data } = await apiRequest().get(`${baseURL}`, options);

//             return data; 
//         } catch ( error: any){
//             return thunkAPI.rejectWithValue('Can;t fetch data', error)
//         }
//     }
// )

export const getAllNotes = createAsyncThunk(
    'notes/getAllNotes',
    async (_, thunkAPI) => {
        try {
            const response = await apiRequest().get(baseURL, options);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Can\'t fetch data');
        }
    }
);
