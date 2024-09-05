
import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
    name: 'NameSlice',
    initialState:{
        naam : ''
    },
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload
        }
    }
})

export const {setName} = NameSlice.actions
export default NameSlice.reducer