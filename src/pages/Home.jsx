import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppContext } from '../App'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'

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
	const categoryId = useSelector(state => state.filterSlice.categoryId)
	const dispatch = useDispatch()

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id))
	}

	const { searchValue } = useContext(AppContext)
	const [items, setItems] = useState([])
	const [sortType, setSortType] = useState({
		name: 'популярности',
		property: 'rating',
	})
	// const [categoryId, setCategoryId] = useState(0)

	useEffect(() => {
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
		axios.get('https://647efc54c246f166da8fd2c1.mockapi.io/cart').then(res => {
			setCartItems(res.data)
		})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue])

	const onAddToPizza = obj => {
		axios.post('https://647efc54c246f166da8fd2c1.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	return (
		<>
			<ContentTop>
				<Categories
					categoryId={categoryId}
					onChangeCategory={onChangeCategory}
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
