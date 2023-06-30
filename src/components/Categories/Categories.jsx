import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// import { setCategoryId } from '../../redux/slices/filterSlice.js'
import { useContext } from 'react'
import { PizzaContext } from '../../Context/Context.jsx'

const CategoriesUl = styled.ul`
	display: flex;
`
const CategoriesLi = styled.li`
	background-color: #dbdada;
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

const Categories = () => {
	const { state, dispatch } = useContext(PizzaContext);

	const onChangeCategory = id => {
		dispatch({
			type: 'categories',
			payload: id
		})
	}

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<div>
			<CategoriesUl>
				{categories.map((item, index) => (
					<CategoriesLi
						key={index}
						onClick={() => onChangeCategory(index)}
						className={state.categoryId === index ? 'active' : ''}
					>
						{item}
					</CategoriesLi>
				))}
			</CategoriesUl>
		</div>
	)
}

export default Categories
