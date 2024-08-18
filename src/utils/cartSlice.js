import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        //state is used to get initialState values and 
        //action is used to get value from dispatch function
        addItem: (state, action) => {
           state.items.push(action.payload);
        },
        //action is optional here as its value will not be used
        clearCart: (state, action) => {
           state.items.length = 0;
        },
        removeItem: (state) => {
            state.items.pop();
         }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;