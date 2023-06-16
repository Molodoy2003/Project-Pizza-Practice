import React from 'react'
import styled from 'styled-components'

const CategoriesUl = styled.ul`
	display: flex;
`
const CategoriesLi = styled.li`
	background-color: #f9f9f9;
	padding: 13px 30px;
	border-radius: 30px;
	margin-right: 10px;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.1s ease-in-out;

	&:hover {
		background-color: darken(#f9f9f9, 2%);
	}

	&:active {
		background-color: darken(#f9f9f9, 5%);
	}

	&.active {
		background-color: #282828;
		color: #fff;
	}
`

const Categories = ({ categotyId, onChangeCategory }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	]

	return (
		<div>
			<CategoriesUl>
				{categories.map((item, index) => (
					<CategoriesLi
						key={index}
						onClick={() => onChangeCategory(index)}
						className={categotyId === index ? 'active' : ''}
					>
						{item}
					</CategoriesLi>
				))}
			</CategoriesUl>
		</div>
	)
}

export default Categories
