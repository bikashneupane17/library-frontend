import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

//configure redux store and export

const store = configureStore({
  reducer: {
    //all the slices
    userInfo: userReducer,
  },
});

//export default store
export default store;
