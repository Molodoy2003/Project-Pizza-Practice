import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		property: 'rating',
	}
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSortType(state, action) {
			state.sort = action.payload
		},
	},
})

export const { setCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer



// import React, { useReducer, createContext, useContext } from "react";


// const initialState = {
//   categoryId: 0,
// 	// sort: {
// 	// 	name: 'популярности',
// 	// 	property: 'rating',
// 	// },
// };

// const categoryId = 'categoryId'

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case categoryId:
//       return {
//         ...state,
// 				// setSort: sort(action.payload)
//       };
//     default:
//       return state;
//   }
// };

// const initializeState = () => initialState;

// export const PizzaContext = createContext(null);

// export const PizzaContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initializeState());
//   return (
//     <PizzaContext.Provider value={{ state, dispatch }}>
//       {children}
//     </PizzaContext.Provider>
//   );
// };

