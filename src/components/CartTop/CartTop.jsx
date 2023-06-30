import React, { useContext } from 'react'
import styled from 'styled-components'
import { onClearCart } from '../../services/requests.js'
import { PizzaContext } from '../../Context/Context.jsx'
// import { useDispatch, useSelector } from 'react-redux';
// import { clearPizzas } from '../../redux/slices/cartSlice.js'

const CartTopStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const CartTitle = styled.h2`
	display: flex;
	align-items: center;
	font-size: 32px;
	font-weight: 800;
	svg {
		position: relative;
		top: -2px;
		width: 30px;
		height: 30px;
		margin-right: 10px;
		path {
			stroke: #232323;
			stroke-width: 1.9;
		}
	}
`
const CartClear = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-weight: 700;
	span {
		display: inline-block;
		color: #b6b6b6;
		font-size: 18px;
		transition: all 0.5s ease;
		&:hover {
			color: #2f2f2f;
		}
	}
`



const CartTop = ({ setCartItems }) => {
	const {state, dispatch } = useContext(PizzaContext)

	const onClearCart = () => {
		setCartItems([])
	}
	// const onClearPizzas = () => {
	// 	dispatch(clearPizzas())
	// }

	return (
		<CartTopStyles>
			<CartTitle>
				<svg
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				></svg>
				Корзина
			</CartTitle>
			<CartClear onClick={onClearCart}>
				<span>Очистить корзину</span>
			</CartClear>
		</CartTopStyles>
	)
}

export default CartTop
