import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

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
					<li
						className={activeTab === 0 ? 'active' : ''}
						onClick={() => onClickTab(0)}
					>
						Маргарита
					</li>
					<li
						className={activeTab === 1 ? 'active' : ''}
						onClick={() => onClickTab(1)}
					>
						Пепперони
					</li>
					<li
						className={activeTab === 2 ? 'active' : ''}
						onClick={() => onClickTab(2)}
					>
						Чизбургер-пицца
					</li>
					<li
						className={activeTab === 3 ? 'active' : ''}
						onClick={() => onClickTab(3)}
					>
						Сырная
					</li>
					<li
						className={activeTab === 4 ? 'active' : ''}
						onClick={() => onClickTab(4)}
					>
						Пепперони Фреш
					</li>
					<li
						className={activeTab === 5 ? 'active' : ''}
						onClick={() => onClickTab(5)}
					>
						Цыпленок барбекю
					</li>
					<li
						className={activeTab === 6 ? 'active' : ''}
						onClick={() => onClickTab(6)}
					>
						Сладкий цыпленок
					</li>
					<li
						className={activeTab === 7 ? 'active' : ''}
						onClick={() => onClickTab(7)}
					>
						Крэйзи пепперони
					</li>
				</ul>
				<Link to='/home'>
					<button>order online</button>
				</Link>
			</div>
		</div>
	)
}

export default Menu
