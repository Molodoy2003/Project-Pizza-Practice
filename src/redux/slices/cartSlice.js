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
			state.items = state.items.filter(obj => obj.id !== action.payload)
			state.totalPrice = state.items.reduce((sum, item) => {
				return sum + item.price
			}, 0)
		},
		addPizza(state, action) {
			state.items.push(action.payload)
			state.totalPrice = state.items.reduce((sum, item) => {
				return item.price + sum
			}, 0)
		},
		clearPizzas(state, action) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addPizza, removePizza, clearPizzas } = cartSlice.actions

export default cartSlice.reducer
