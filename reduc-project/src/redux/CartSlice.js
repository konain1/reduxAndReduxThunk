
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.cart.push(action.payload);
        }
    }
})

export const {addtoCart} = cartSlice.actions
export default cartSlice.reducer