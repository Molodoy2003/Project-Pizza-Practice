import React, { useState } from 'react'
import styled from 'styled-components'

const SortStyles = styled.div`
	position: relative;
`
const SortLabel = styled.div`
	display: flex;
	align-items: center;
	svg {
		margin-right: 8px;
	}

	b {
		margin-right: 8px;
	}

	span {
		color: #fe5f1e;
		border-bottom: 1px dashed #fe5f1e;
		cursor: pointer;
	}
`
const SortPopup = styled.div`
	position: absolute;
	right: 0;
	margin-top: 15px;
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
	border-radius: 10px;
	overflow: hidden;
	padding: 10px 0;
	width: 160px;

	ul {
		overflow: hidden;
		li {
			padding: 12px 20px;
			cursor: pointer;

			&.active,
			&:hover {
				background: rgba(254, 95, 30, 0.05);
			}

			&.active {
				font-weight: bold;
				color: #fe5f1e;
			}
		}
	}
`

const Sort = ({ sortType, onChangeSort }) => {
	const [open, setOpen] = useState(false)
	const sorts = [
		{ name: 'популярности', property: 'rating' },
		{ name: 'цене', property: 'price' },
		{ name: 'алфавиту', property: 'title' }
	]

	const onClickSort = index => {
		onChangeSort(index)
		setOpen(false)
	}

	return (
		<SortStyles>
			<SortLabel>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				></svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sortType.name}</span>
			</SortLabel>
			{open && (
				<SortPopup>
					<ul>
						{sorts.map((obj, index) => (
							<li
								key={index}
								onClick={() => onClickSort(obj)}
								className={sortType.property === obj.property ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</SortPopup>
			)}
		</SortStyles>
	)
}

export default Sort
