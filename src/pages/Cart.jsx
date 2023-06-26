import axios from 'axios'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import styled from 'styled-components'
import CartBottom from '../components/CartBottom/CartBottom'
import CartTop from '../components/CartTop/CartTop'
import { onRemovePizza } from '../services/requests.js'

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

const Cart = ({ cartItems, setCartItems }) => {

	return (
		<CartStyles>
			<CartTop />
			<CartItems>
				{cartItems.map(item => (
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
						<VscChromeClose
							onClick={() => onRemovePizza(item.id, setCartItems)}
							style={{ marginTop: '34px', cursor: 'pointer' }}
						/>
					</CartStl>
				))}
			</CartItems>
			<CartBottom cartItems={cartItems} />
		</CartStyles>
	)
}

export default Cart
