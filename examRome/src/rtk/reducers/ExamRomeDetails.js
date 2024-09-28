import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getRoomDetails = createAsyncThunk('roomDetailsSlice/getRoomDetials',
    async (id, thunkAPI) => {
        try {
            const response = await fetch (`https://localhost:7290/api/ExamRooms/Details/${id}`,{
                headers:{
                     'Authorization': `Bearer ${localStorage.getItem('tkn')}`

                }
            });
            const data = await response.json(); // تحويل الاستجابة إلى JSON
            console.log('room content:', data )
            return data ;          ;  // الفولدرات المسترجعة من الـ API
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)
const roomDetailsSlice = createSlice({
    name: 'roomDetailsSlice',
    initialState: [],
    reducers: {
        // addFolder(state, action) {
        //     state.folders.push(action.payload);
        // },
        // removeFolder(state, action) {    
    },
    extraReducers:(builder) => {
        builder.addCase(getRoomDetails.fulfilled,(state, action) =>{
            return action.payload;
        })

    }
            
    
})
export default roomDetailsSlice.reducer;