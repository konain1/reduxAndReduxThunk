import { createSlice } from "@reduxjs/toolkit";

const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    greet: ''
  },
  reducers: {
    greetRed: (state, action) => {
      state.greet = action.payload;  // Correctly update the state with payload
    }
  }
});

export const { greetRed} = helloSlice.actions;
export default helloSlice.reducer;
