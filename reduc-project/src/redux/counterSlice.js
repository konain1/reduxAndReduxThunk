
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    count:2
}


const CounterSlice  = createSlice({
    name:'count',
    initialState,
    reducers:{
        addmore:(state,action)=>{
            state.count = action.payload
        }
    }
})

export const {addmore} = CounterSlice.actions
export default CounterSlice.reducer