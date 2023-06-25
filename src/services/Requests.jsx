// import axios from 'axios'
// import { useContext, useState } from 'react'
// import { AppContext } from '../App'

// const { searchValue } = useContext(AppContext)
// const [items, setItems] = useState([])
// const [categotyId, setCategotyId] = useState(0)
// const getPizza = () => {
// 	axios
// 		.get(
// 			`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
// 				categotyId > 0 ? `category=${categotyId}` : ''
// 			}&sortBy=${sortType.property}&order=desc${
// 				searchValue ? `&search=${searchValue}` : ''
// 			}`
// 		)
// 		.then(res => {
// 			setItems(res.data)
// 		})
// 	axios.get('https://647efc54c246f166da8fd2c1.mockapi.io/cart').then(res => {
// 		setCartItems(res.data)
// 	})
// 	window.scrollTo(0, 0)
// }

// const onAddToPizza = obj => {
// 	axios.post('https://647efc54c246f166da8fd2c1.mockapi.io/cart', obj)
// 	setCartItems(prev => [...prev, obj])
// }

// const removePizza = (id) => {
// 	axios.delete(`https://647efc54c246f166da8fd2c1.mockapi.io/cart/${id}`)
// 	setCartItems(prev => prev.filter(item => item.id !== id))
// }

// export { removePizza }
