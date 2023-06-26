import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppContext } from '../App'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'
import { getCartItems, getItems, onAddToPizza } from '../services/requests'

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

const Home = ({ setCartItems }) => {
	const categoryId = useSelector(state => state.filterSlice.categoryId)
	const sortType = useSelector(state => state.filterSlice.sort)

	const { searchValue } = useContext(AppContext)
	const [items, setItems] = useState([])

	useEffect(() => {
		getItems(categoryId, sortType, searchValue, setItems)
		getCartItems(setCartItems)
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue])

	return (
		<>
			<ContentTop>
				<Categories />
				<Sort />
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
						onPlus={() => onAddToPizza(item, setCartItems)}
					/>
				))}
			</ContentItems>
		</>
	)
}

export default Home
