import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
}

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		removePizza(state, action) {
			state.items.filter(obj => obj.id !== action.payload)
		},
		addPizza(state, action) {
			state.items.push(action.payload)
			state.totalPrice = state.items.reduce((sum, item) => {
				return item.price + sum
			}, 0)
		},
		clearPizzas(state, action) {
			state.items = []
		},
	},
})

export const { addPizza, removePizza, clearPizzas } = cartSlice.actions

export default cartSlice.reducer
