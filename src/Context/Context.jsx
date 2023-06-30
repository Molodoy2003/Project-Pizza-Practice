import React, { createContext, useReducer } from 'react'

const initialState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		property: 'rating',
	},
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
