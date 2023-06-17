import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchdata = createAsyncThunk('fetchdata', () => {
    return axios
        .get('https://reqres.in/api/users?page=1&per_page=5')
        .then((response) => response.data)
});
const apidataSlice = createSlice({
    name: "Allapidata",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchdata.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchdata.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    }

});
export default apidataSlice.reducer;