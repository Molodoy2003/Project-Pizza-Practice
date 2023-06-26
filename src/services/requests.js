import axios from 'axios'

export const getItems = (categoryId, sortType, searchValue, setItems) => {
	try {
		axios
			.get(
				`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
					categoryId > 0 ? `category=${categoryId}` : ''
				}&sortBy=${sortType.property}&order=desc${
					searchValue ? `&search=${searchValue}` : ''
				}`
			)
			.then(res => {
				setItems(res.data)
			})
	} catch (error) {
		console.log(error)
	}
}

export const getCartItems = setCartItems => {
	try {
		axios.get('https://647efc54c246f166da8fd2c1.mockapi.io/cart').then(res => {
			setCartItems(res.data)
		})
	} catch (error) {
		console.log(error)
	}
}

export const onAddToPizza = (obj, setCartItems) => {
	try {
		axios.post('https://647efc54c246f166da8fd2c1.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	} catch (error) {
		console.log(Error)
	}
}

export const onRemovePizza = (id, setCartItems) => {
	try {
		axios.delete(`https://647efc54c246f166da8fd2c1.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	} catch (error) {
		console.log(error)
	}
}
