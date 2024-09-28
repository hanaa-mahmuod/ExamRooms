import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getFolderDetails = createAsyncThunk('folderDetailsSlice/getFolderDetials',
    async (id, thunkAPI) => {
        try {
            const response = await fetch (`https://localhost:7290/api/Folders/Details/${id}`,{
                headers:{
                      'Authorization': `Bearer ${localStorage.getItem('tkn')}`

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