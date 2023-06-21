import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortType: {
		name: 'популярности',
		property: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategotyId(state, action) {
			state.categoryId = action.payload
		},
	},
})

export const { setCategotyId } = filterSlice.actions

export default filterSlice.reducer