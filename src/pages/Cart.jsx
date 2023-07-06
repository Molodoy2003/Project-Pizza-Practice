import { CloseCircle as CloseItem } from '@styled-icons/ionicons-outline/CloseCircle'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { PizzaContext } from '../Context/Context'
import CartBottom from '../components/CartBottom/CartBottom'
import CartTop from '../components/CartTop/CartTop'
import Header from '../components/Header/Header'
import { getCartItems, onRemovePizza } from '../services/requests.js'
import toast, { Toaster } from 'react-hot-toast'

const CartStyles = styled.div`
	max-width: 820px;
	margin: 90px auto;
`

const CartItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const CartStl = styled.div`
	display: flex;
	width: 100%;
	border-top: 1px solid #f6f6f6;
	padding-top: 30px;
	margin-top: 30px;
`
const CartImg = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
	width: 10%;
	img {
		width: 85px;
		height: 85px;
	}
`
const PizzaImage = styled.img`
	width: 100px;
`
const CartInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 40%;

	h3 {
		font-weight: 800;
		font-size: 22px;
		line-height: 27px;
		letter-spacing: 0.01em;
	}

	p {
		font-size: 18px;
		color: #8d8d8d;
	}
`
const CartCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 13%;
	&-minus {
		svg {
			path:first-of-type {
				display: none;
			}
		}
	}
	b {
		font-weight: 800;
		font-size: 22px;
	}
`
const CartPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33%;
	b {
		font-weight: 800;
		font-size: 22px;
		letter-spacing: 0.01em;
	}
`
const CloseIcon = styled(CloseItem)`
	cursor: pointer;
	opacity: 0.3;
	transition: all 0.3s ease;
	&:hover {
		opacity: 1;
	}
`

const Cart = ({ cartItems, setCartItems }) => {
	const { state, dispatch } = useContext(PizzaContext)

	const removePizza = (id, setCartItems) => {
		// onRemovePizza(id, setCartItems)
		setCartItems(prev => prev.filter(item => item.id !== id))
		dispatch({
			type: 'removeCartItem',
			payload: id,
		})
		onRemovePizza(id)
		notify()
	}

	useEffect(() => {
		getCartItems().then(res => {
			dispatch({
				type: 'cartItems',
				payload: res.data,
			})
		})
	}, [])

	const notify = () => toast.success('Пицца успешно удалена из корзины.')

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
			<CartStyles>
				<CartTop setCartItems={setCartItems} />
				<CartItems>
					{state.cartItems.map(item => (
						<CartStl>
							<CartImg>
								<PizzaImage src={item.imageUrl} alt='Pizza' />
							</CartImg>
							<CartInfo>
								<h3>{item.title}</h3>
							</CartInfo>
							<CartPrice>
								<b>{item.price} р.</b>
							</CartPrice>
							<CloseIcon
								size={28}
								onClick={() => removePizza(item.id, setCartItems)}
							/>
						</CartStl>
					))}
				</CartItems>
				<CartBottom cartItems={cartItems} />
			</CartStyles>
		</>
	)
}

export default Cart
