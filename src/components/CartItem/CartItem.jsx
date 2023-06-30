import { CloseCircle as CloseItem } from '@styled-icons/ionicons-outline/CloseCircle'
import React from 'react'
import styled from 'styled-components'
import { onRemovePizza } from '../../services/requests.js'

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

const CartItem = ({ id, title, price, imageUrl }) => {
	return (
		<CartStl>
			<CartImg>
				<PizzaImage src={imageUrl} />
			</CartImg>
			<CartInfo>
				<h3>{title}</h3>
			</CartInfo>
			<CartPrice>
				<b>{price} р.</b>
			</CartPrice>
			<CloseIcon onClick={onRemovePizza} size={28} />
		</CartStl>
	)
}

export default CartItem
