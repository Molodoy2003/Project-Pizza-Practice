import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux'


const CartBottomStyles = styled.div`
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

const CartButtonPay1 = styled(Link)`
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
	transition: all 0.3s ease-in;
	&:hover {
		transform: scale(1.03);
	}
`
const CartBottomButtons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`
const CartBtnBack = styled(CartButtonPay)`
	width: 170px;
`

const CartBottom = ({cartItems}) => {
	// const {items, totalPrice} = useSelector(state => state.cartSlice)

	return (
		<CartBottomStyles>
			<CartDetails>
				<span>
					{' '}
					Всего пицц: <b>{cartItems.length} шт.</b>{' '}
				</span>
				<span>
					{' '}
					Сумма заказа: <b>0 р.</b>{' '}
				</span>
			</CartDetails>
			<CartBottomButtons>
				<CartBtnBack to='/'>
					<span>Вернуться назад</span>
				</CartBtnBack>
				<CartButtonPay>
					<span>Оплатить сейчас</span>
				</CartButtonPay>
			</CartBottomButtons>
		</CartBottomStyles>
	)
}

export default CartBottom
