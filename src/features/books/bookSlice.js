import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: {},
};

// // action have 2 property (payload and type)
// const action = {
//     payload:'asdf',
//     type:'asd'
// }

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload || [];
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBook, setSelectedBook } = actions;

// export const bookReducer = reducer;
export default reducer;
