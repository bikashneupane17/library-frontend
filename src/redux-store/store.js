import bookReducer from "../features/books/bookSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

//configure redux store and export

const store = configureStore({
  reducer: {
    //all the slices
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});

//export default store
export default store;
