import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../Search/Search'

const HeaderStyles = styled.div`
	border-bottom: 1px solid #f6f6f6;
	padding: 40px 0;
`
const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
`
const HeaderLogo = styled.div`
	display: flex;
	img {
		margin-right: 15px;
	}

	h1 {
		color: #181818;
		font-size: 24px;
		letter-spacing: 1%;
		text-transform: uppercase;
		font-weight: 800;
	}

	p {
		color: #7b7b7b;
	}
`
const HeaderLink = styled(Link)`
	display: inline-block;
	background-color: #fe5f1e;
	border-radius: 30px;
	padding: 10px 20px;
	min-width: 100px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
	border: 1px solid transparent;
	&,
	span {
		color: #fff;
	}
`
const HeaderButton = styled(HeaderLink)`
	display: flex;
	align-items: center;
	line-height: 23px;
	padding: 12px 25px;
	&:hover {
		background-color: darken(#fe5f1e, 8%);
	}
	&:active {
		background-color: darken(#fe5f1e, 12%);
		transform: translateY(1px);
	}
	svg {
		margin-right: 8px;
		margin-bottom: 1px;
	}
	span {
		font-weight: 600;
		font-size: 16px;
	}
`
const ButtonDelimiter = styled.div`
	width: 1px;
	height: 25px;
	background-color: rgba(255, 255, 255, 0.25);
	margin-left: 14px;
	margin-right: 14px;
`

const Header = () => {
	return (
		<HeaderStyles>
			<HeaderContainer>
				<Link to='/'>
					<HeaderLogo>
						<img width='38' src='./img/pizza-logo.svg' alt='Pizza logo' />
						<div>
							<h1>Доминос Пицца</h1>
							<p>самая вкусная пицца в Бресте</p>
						</div>
					</HeaderLogo>
				</Link>
				<Search />
				<div>
					<HeaderButton to='/cart'>
						<span>520 р.</span>
						<ButtonDelimiter></ButtonDelimiter>
						<BsCart3 />
						<span>3</span>
					</HeaderButton>
				</div>
			</HeaderContainer>
		</HeaderStyles>
	)
}

export default Header
