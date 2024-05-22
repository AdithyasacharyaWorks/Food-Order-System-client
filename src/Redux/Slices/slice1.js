import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItem:[],
      totalItems: 0,
    },
    reducers: {
      addItem: (state, action) => {
        console.log("recivede in redux",action.payload)
        const newItem = action.payload;
        const existingItem = state?.cartItem?.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItem.push({ ...newItem, quantity: 1 });
        }
        state.totalItems += 1;
      },
      removeItem: (state, action) => {
        const itemIdToRemove = action.payload;
        const itemToRemove = state.cartItem?.find(item => item.id === itemIdToRemove);
        if (itemToRemove) {
          if (itemToRemove.quantity > 1) {
            itemToRemove.quantity -= 1;
          } else {
            state.cartItem = state?.cartItem.filter(item => item.id !== itemIdToRemove);
          }
        }
        state.totalItems -= 1;
      },
      clearCart: state => {
        state.cartItem = [];
        state.totalItems = 0;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addItem, removeItem, clearCart } = cartSlice.actions
  
  export default cartSlice.reducer
