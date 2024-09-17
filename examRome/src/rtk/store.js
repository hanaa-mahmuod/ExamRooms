import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./reducers/folder"
const store = configureStore({
  reducer: {
    folders:folderReducer
    // add your reducers here
  },
})
export default store;