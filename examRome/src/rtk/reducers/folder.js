import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getFolders = createAsyncThunk('folderSlice/getFolders',
    async (_, thunkAPI) => {
        try {
            const response = await fetch ('http://localhost:5000/api/Folders');
            const data = await response.json(); // تحويل الاستجابة إلى JSON
            return data;  // الفولدرات المسترجعة من الـ API
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)

const folderSlice = createSlice({
    name: 'folderSlice',
    initialState: {
        folders: [],
        loading: false,
        error: null
    },
    reducers: {
        // addFolder(state, action) {
        //     state.folders.push(action.payload);
        // },
        // removeFolder(state, action) {    
    },
    extraReducers:(builder) => {
        builder.addCase(getFolders.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getFolders.fulfilled,(state, action) =>{
            state.folders = action.payload;
            state.loading = false;
        })
        .addCase(getFolders.rejected,(state, action) =>{
            state.loading = false;
            state.error = action.payload|| 'Failed to get folders';
        })

    }
            
    
})
export default folderSlice.reducer;