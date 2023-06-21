import React from 'react'
import styled from 'styled-components'

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

	span {
		display: inline-block;
		margin-left: 7px;
		color: #b6b6b6;
		font-size: 18px;
	}

	span,
	svg,
	path {
		transition: all 0.15s ease-in-out;
	}
`

const CartTop = () => {
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
			{/* <CartClear>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				></svg>

				<span>Очистить корзину</span>
			</CartClear> */}
		</CartTopStyles>
	)
}

export default CartTop
