import React, { createContext, useReducer } from 'react'


const initialState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		property: 'rating',
	},
	searchValue: '',
	items: [],
	cartItems: [],
	totalPrice: 0
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'categories':
			return {
				...state,
				categoryId: action.payload,
			}
		case 'sort':
			return {
				...state,
				sort: action.payload,
			}
		case 'searchValue':
			return {
				...state,
				searchValue: action.payload,
			}
		case 'items':
			return {
				...state,
				items: action.payload,
			}
		case 'cartItems':
			return {
				...state,
				cartItems: action.payload,
			}
		case 'removeCartItem':
			// return {
			// 	...state,
			// 	cartItems: state.cartItems.filter(obj => obj.id !== action.payload),
			// }
			const removeItemId = action.payload;
			const removeItem = state.cartItems.find(item => item.id === removeItemId);
			const newCartItems = state.cartItems.filter(item => item.id !== removeItemId);
			const newTotalCartPrice = state.totalPrice - removeItem.price;
			return {
					...state,
					cartItems: newCartItems,
					totalPrice: newTotalCartPrice,
			};
		case 'addCartItem':
			const newCartItem = action.payload
			const newTotalPrice = state.totalPrice + newCartItem.price
			return {
				...state,
				cartItems: [...state.cartItems, newCartItem],
				totalPrice: newTotalPrice,
			}
		default:
			return state
	}
}

const initializeState = () => initialState

export const PizzaContext = createContext(initialState)

export const PizzaContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initializeState())
	return (
		<PizzaContext.Provider value={{ state, dispatch }}>
			{children}
		</PizzaContext.Provider>
	)
}
