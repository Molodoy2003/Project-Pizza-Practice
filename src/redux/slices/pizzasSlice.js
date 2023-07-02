import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	cartItems: []
}



const pizzasSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
		setCartItems(state, action) {
			state.cartItems = action.payload
		}
	},
})

export const { setItems, setCartItems } = pizzasSlice.actions

export default pizzasSlice.reducer
