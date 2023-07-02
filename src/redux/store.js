import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import pizzasSlice from './slices/pizzasSlice'

export const store = configureStore({
	reducer: { filterSlice, cartSlice, pizzasSlice },
})
