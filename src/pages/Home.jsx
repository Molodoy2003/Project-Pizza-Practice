import React, { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import styled from 'styled-components'
import { PizzaContext } from '../Context/Context'
import Categories from '../components/Categories/Categories'
import Header from '../components/Header/Header'
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
	const { state, dispatch } = useContext(PizzaContext)

	const addPizza = (item, setCartItems) => {
		onAddToPizza(item)
		// setCartItems(prev => [...prev, item])
		dispatch({
			type: 'addCartItem',
			payload: item,
		})
		notify()
	}

	useEffect(() => {
		getItems(state.categoryId, state.sort, state.searchValue).then(res =>
			dispatch({
				type: 'items',
				payload: res.data,
			})
		)

		getCartItems().then(res => {
			dispatch({
				type: 'cartItems',
				payload: res.data,
			})
		})

		window.scrollTo(0, 0)
	}, [state.categoryId, state.sort, state.searchValue])

	const notify = () => toast.success('Пицца успешно добавлена в корзину.')

	return (
		<>
			<Toaster
				toastOptions={{
					className: '',
					duration: 1000,
					style: {
						border: '1px solid #007124',
						backgroundColor: '#007124',
						padding: '5px 15px',
						color: '#e7e7e7',
						fontWeight: '600',
						width: '300px',
					},	
				}}
			/>
			<Header />
			<ContentTop>
				<Categories />
				<Sort />
			</ContentTop>
			<ContentTitle>Все пиццы</ContentTitle>
			<ContentItems>
				{state.items.map(item => (
					<PizzaBlock
						setCartItems={setCartItems}
						key={item.id}
						{...item}
						onPlus={() => addPizza(item, setCartItems)}
					/>
				))}
			</ContentItems>
		</>
	)
}

export default Home
