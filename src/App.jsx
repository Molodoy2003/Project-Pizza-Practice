import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import './scss/app.scss'

export const AppContext = createContext()

const App = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<AppContext.Provider value={{ searchValue, setSearchValue }}>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
						</Routes>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
