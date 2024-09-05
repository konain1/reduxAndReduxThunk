import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounteSlice';  // Correctly import the reducer
import helloReducer from './HelloSlice';  // Correctly import the HelloSlice reducer
import RandomReducer from './RandomSlice'
import NameReducer from './NameSlice'
import productReducer from './ProductSlice'
import cartReducer from '../redux/CartSlice'

const store = configureStore({
  reducer: {
    counterRTK: counterReducer,
    greeting: helloReducer,  // Use the reducer, not the action creator
    randomMath:RandomReducer,
    nameSetting:NameReducer,
    productStore:productReducer,
    cartStore:cartReducer

  }
});

export { store };
