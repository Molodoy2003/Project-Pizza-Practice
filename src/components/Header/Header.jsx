import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { BsCart3 } from "react-icons/bs";

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img
							width='38'
							src='./img/pizza-logo.svg'
							alt='Pizza logo'
						/>
						<div>
							<h1>Доминос Пицца</h1>
							<p>самая вкусная пицца в Бресте</p>
						</div>
					</div>
				</Link>
				<Search />
				<div className='header__cart'>
					<Link to='/cart' className='button button--cart'>
						<span>520 р.</span>
						<div className='button__delimiter'></div>
						<BsCart3/>
						<span>3</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
