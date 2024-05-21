import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
//createSlice
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

//export functions inside actions and reducer
export const { setUser } = actions;

export default reducer;
