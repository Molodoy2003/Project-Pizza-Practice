import axios from 'axios'

export const getItems = async (categoryId, sortType, searchValue) => {
	const response = await axios.get(
		`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
			categoryId > 0 ? `category=${categoryId}` : ''
		}&sortBy=${sortType.property}&order=desc${
			searchValue ? `&search=${searchValue}` : ''
		}`
	)
	return response
}

export const getCartItems = async () => {
	const response = await axios.get(
		'https://647efc54c246f166da8fd2c1.mockapi.io/cart'
	)
	return response
}

export const onAddToPizza = async obj => {
	const response = await axios.post(
		'https://647efc54c246f166da8fd2c1.mockapi.io/cart',
		obj
	)
	return response
}

export const onRemovePizza = async id => {
	const response = await axios.delete(
		`https://647efc54c246f166da8fd2c1.mockapi.io/cart/${id}`
	)
	return response
}

export const onClearCart = async () => {
	const response = await axios.delete(
		`https://647efc54c246f166da8fd2c1.mockapi.io/cart`
	)
	return response
}
