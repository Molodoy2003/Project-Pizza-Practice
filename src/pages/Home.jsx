import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'

const ContentTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const ContentTitle = styled.h2`
	margin: 35px 0;
`
const ContentItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Home = ({ cartItems, setCartItems }) => {
	const { searchValue } = useContext(AppContext)
	const [items, setItems] = useState([])
	const [sortType, setSortType] = useState({
		name: 'популярности',
		property: 'rating',
	})
	const [categotyId, setCategotyId] = useState(0)

	useEffect(() => {
		axios
			.get(
				`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
					categotyId > 0 ? `category=${categotyId}` : ''
				}&sortBy=${sortType.property}&order=desc${
					searchValue ? `&search=${searchValue}` : ''
				}`
			)
			.then(res => {
				setItems(res.data)
			})
		axios.get('https://647efc54c246f166da8fd2c1.mockapi.io/cart').then(res => {
			setCartItems(res.data)
		})
		window.scrollTo(0, 0)
	}, [categotyId, sortType, searchValue])

	const onAddToPizza = obj => {
		axios.post('https://647efc54c246f166da8fd2c1.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	return (
		<>
			<ContentTop>
				<Categories
					categotyId={categotyId}
					onChangeCategory={id => setCategotyId(id)}
				/>
				<Sort sortType={sortType} onChangeSort={id => setSortType(id)} />
			</ContentTop>
			<ContentTitle>Все пиццы</ContentTitle>
			<ContentItems>
				{items.map(item => (
					<PizzaBlock
						key={item.id}
						title={item.title}
						price={item.price}
						image={item.imageUrl}
						sizes={item.sizes}
						types={item.types}
						onPlus={() => onAddToPizza(item)}
					/>
				))}
			</ContentItems>
		</>
	)
}

export default Home
