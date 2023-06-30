import React, { useContext, useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppContext } from '../App'
import { PizzaContext } from '../Context/Context'
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

const Home = ({ cartItems, setCartItems }) => {
	// const categoryId = useSelector(state => state.filterSlice.categoryId)
	// const sortType = useSelector(state => state.filterSlice.sort)
	const { searchValue } = useContext(AppContext)
	const [items, setItems] = useState([])
	const { state, dispatch } = useContext(PizzaContext)

	useEffect(() => {
		getItems(state.categoryId, state.sort, searchValue).then(res =>
			setItems(res.data)
		)

		getCartItems(setCartItems).then(res => {
			setCartItems(res.data)
		})
		window.scrollTo(0, 0)
	}, [state.categoryId, state.sort, searchValue])

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
						{...item}
						onPlus={() => onAddToPizza(item, setCartItems)}
					/>
				))}
			</ContentItems>
		</>
	)
}

export default Home
