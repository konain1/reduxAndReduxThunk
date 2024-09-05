import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
      // Error state to handle any API errors
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productInfo: (state, action) => {
      state.productData = action.payload;
      // Set loading to false when data is received
    },
    // setLoading: (state) => {
    //   state.loading = true;  // Indicate loading state when fetching data
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;  // Handle errors
    //   state.loading = false;
    // }
  }
});

export const { productInfo, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;

