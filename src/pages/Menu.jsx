import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'



const list = [
	'Маргарита',
	'Пепперони',
	'Чизбургер-пицца',
	'Сырная',
	'		Пепперони Фреш',
	'	Цыпленок барбекю',
	'	Сладкий цыпленок',
	'		Крэйзи пепперони',
]

const Menu = () => {
	const [activeTab, setActiveTab] = useState(0)

	const onClickTab = id => {
		setActiveTab(id)
	}

	return (
		<div className='menu'>
			<div className='menu__info'>
				<div className='menu__title'>
					Доминос <span>Пицца</span> <br />{' '}
					<div>самая вкусная пицца в Бресте</div>
				</div>
				<div className='menu__img'>
					{activeTab === 0 && (
						<img src='./img/1.png' width={400} height={200} alt='1' />
					)}
					{activeTab === 1 && (
						<img src='./img/2.png' width={400} height={200} alt='2' />
					)}
					{activeTab === 2 && (
						<img src='./img/3.png' width={400} height={200} alt='3' />
					)}
					{activeTab === 3 && (
						<img src='./img/4.png' width={400} height={200} alt='4' />
					)}
					{activeTab === 4 && (
						<img src='./img/5.png' width={400} height={200} alt='5' />
					)}
					{activeTab === 5 && (
						<img src='./img/6.png' width={400} height={200} alt='6' />
					)}
					{activeTab === 6 && (
						<img src='./img/7.png' width={400} height={200} alt='7' />
					)}
					{activeTab === 7 && (
						<img src='./img/8.png' width={400} height={200} alt='8' />
					)}
				</div>
			</div>
			<div className='line' />
			<div className='menu__list'>
				<ul>
					{list.map((item, id) => (
						<li
							className={activeTab === id ? 'active' : ''}
							onClick={() => onClickTab(id)}
						>
							{item}
						</li>
					))}
				</ul>
				<Link to='/catalog'>
					<button>order online</button>
				</Link>
			</div>
		</div>
		
	)
}

export default Menu
