import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem/CartItem'

const CartStyles = styled.div`
	max-width: 820px;
	margin: 90px auto;
`
const CartTop = styled.div`
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

	span {
		display: inline-block;
		margin-left: 7px;
		color: #b6b6b6;
		font-size: 18px;
	}

	span,
	svg,
	path {
		transition: all $duration ease-in-out;
	}

	&:hover {
		svg {
			path {
				stroke: darken($color: #b6b6b6, $amount: 50);
			}
		}
		span {
			color: darken($color: #b6b6b6, $amount: 50);
		}
	}
`
const CartItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`
const CartBottom = styled.div`
	margin: 50px 0;
`
const CartDetails = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		font-size: 22px;

		&:last-of-type {
			b {
				color: $orange;
			}
		}
	}
`
const CartButtonPay1 = styled.div`
	display: inline-block;
	background-color: #fe5f1e;
	border-radius: 30px;
	padding: 10px 20px;
	min-width: 100px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
	border: 1px solid transparent;
	&,
	span {
		color: #fff;
	}
`
const CartButtonPay = styled(CartButtonPay1)`
	font-size: 16px;
	font-weight: 600;
	width: 210px;
	padding: 16px;
`
const CartBottomButtons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`

const Cart = () => {
	return (
		<CartStyles>
			<CartTop>
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
				<CartClear>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					></svg>

					<span>Очистить корзину</span>
				</CartClear>
			</CartTop>
			<CartItems>
				<CartItem />
				<CartItem />
			</CartItems>
			<CartBottom>
				<CartDetails>
					<span>
						{' '}
						Всего пицц: <b>4 шт.</b>{' '}
					</span>
					<span>
						{' '}
						Сумма заказа: <b>900 р.</b>{' '}
					</span>
				</CartDetails>
				<CartBottomButtons>
					<Link to='/' class='button button--outline button--add go-back-btn'>
						<svg
							width='8'
							height='14'
							viewBox='0 0 8 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 13L1 6.93015L6.86175 1'
								stroke='#D3D3D3'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							></path>
						</svg>

						<span>Вернуться назад</span>
					</Link>
					<CartButtonPay>
						<span>Оплатить сейчас</span>
					</CartButtonPay>
				</CartBottomButtons>
			</CartBottom>
		</CartStyles>
	)
}

export default Cart
