import {  createSlice } from "@reduxjs/toolkit";


const initialState ={
    pageNumber: 1,
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers:{
        increment: (state) => {
            state.pageNumber += 1
        },
    },
})

export const {increment} = pageSlice.actions
export default pageSlice.reducer