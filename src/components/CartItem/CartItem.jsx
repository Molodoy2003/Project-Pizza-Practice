import React from 'react'
import styled from 'styled-components'

const CartStyles = styled.div`
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
		width: 80px;
		height: 80px;
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
		font-weight: bold;
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
		font-size: 22px;
	}
`
const CartPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33%;

	b {
		font-weight: bold;
		font-size: 22px;
		letter-spacing: 0.01em;
	}
`


const CartItem = () => {
	return (
		<CartStyles>
			<CartImg>
				<PizzaImage
					src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
					alt='Pizza'
				/>
			</CartImg>
			<CartInfo>
				<h3>Сырный цыпленок</h3>
				<p>тонкое тесто, 26 см.</p>
			</CartInfo>
			<CartCount>
				<b>2</b>
			</CartCount>
			<CartPrice>
				<b>770 р.</b>
			</CartPrice>
		</CartStyles>
	)
}

export default CartItem
