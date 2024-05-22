import { configureStore } from '@reduxjs/toolkit'
import cartReduceer from '../Redux/Slices/slice1'
export default configureStore({
  reducer: {
    cartReducer:cartReduceer
  }
})