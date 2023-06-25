
// import React, { createContext, useReducer } from 'react'

// export const reducer = (state, action) => {
// 	switch (action.type) {
// 		case 'createPizza':
// 			return {
// 				...state,
// 				cartItems: cartItems.push(action.payload),
// 			}
// 		case 'increment': {
// 			return { count: state.count + 1 }
// 		}
// 		default:
// 			return state
// 	}
// }

// const initialState = {
// 	isLoading: false,
// 	cartItems: [],
// }

// const initializeState = () => initialState

// export const PizzaContext = createContext(null)

// export const PizzaContextProvider = ({ children }) => {
// 	const [state, dispatch] = useReducer(reducer, initializeState())

// 	return (
// 		<PizzaContext.Provider value={{ state, dispatch }}>
// 			{children}
// 		</PizzaContext.Provider>
// 	)
// }
