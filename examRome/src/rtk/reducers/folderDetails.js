import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getFolderDetails = createAsyncThunk('folderDetailsSlice/getFolderDetials',
    async (id, thunkAPI) => {
        try {
            const response = await fetch (`https://localhost:5001/api/Folders/Details/${id}`,{
                headers:{
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"

                }
            });
            const data = await response.json(); // تحويل الاستجابة إلى JSON
            console.log('folder content:', data )
            return data ;          ;  // الفولدرات المسترجعة من الـ API
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)
const folderDetailsSlice = createSlice({
    name: 'folderDetailsSlice',
    initialState: [],
    reducers: {
        // addFolder(state, action) {
        //     state.folders.push(action.payload);
        // },
        // removeFolder(state, action) {    
    },
    extraReducers:(builder) => {
        builder.addCase(getFolderDetails.fulfilled,(state, action) =>{
            return action.payload;
        })

    }
            
    
})
export default folderDetailsSlice.reducer;