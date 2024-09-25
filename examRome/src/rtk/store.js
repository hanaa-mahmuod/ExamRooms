import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./reducers/folder"
import folderDetailsSlice from "./reducers/folderDetails";
import roomDetailsSlice from"./reducers/ExamRomeDetails"
const store = configureStore({
  reducer: {
    folders:folderSlice,
    folderDetails:folderDetailsSlice,
    roomDetails:roomDetailsSlice
    // add your reducers here
  },
})
export default store;