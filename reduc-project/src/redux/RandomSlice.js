

import { createSlice } from "@reduxjs/toolkit";

const RandomSlice = createSlice({

    name:'random',
    initialState:{
        value:1
    },
    reducers:{
        generateRandomNumber : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {generateRandomNumber} = RandomSlice.actions
export default RandomSlice.reducer
