import React, { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'random',
    initialState: [],
    reducers: {
        storeUser: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const { storeUser } = userSlice.actions

export default userSlice.reducer