import React, { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Global from './global'
import Routing from './routing/Routing'

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
	const [cartItems, setCartItems] = useState([])

	return (
		<BrowserRouter>
			<Global />
			<AppContext.Provider
				value={{ searchValue, setSearchValue, cartItems, setCartItems }}
			>
				<Wrapper>
					<Header />
					<Content>
						<Container>
							<Routing cartItems={cartItems} setCartItems={setCartItems} />
						</Container>
					</Content>
				</Wrapper>
			</AppContext.Provider>
		</BrowserRouter>
	)
}

export default App
