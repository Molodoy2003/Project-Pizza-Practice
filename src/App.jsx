import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import './scss/app.scss'

const Wrapper = styled.div`
	width: calc(100vw - 100px);
	height: 100%;
	background-color: #fff;
	margin: 50px auto;
	border-radius: 10px;
	max-width: 1400px;
`
const Content = styled.div`
	padding: 40px 0;
`
const Container = styled.div`
	width: 90%;
	margin: 0 auto;
`

export const AppContext = createContext()

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<AppContext.Provider value={{ searchValue, setSearchValue }}>
			<Wrapper>
				<Header />
				<Content>
					<Container>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
						</Routes>
					</Container>
				</Content>
			</Wrapper>
		</AppContext.Provider>
	)
}

export default App
