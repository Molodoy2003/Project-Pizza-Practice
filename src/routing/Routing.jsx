import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

const Routing = ({ cartItems, setCartItems }) => {
	return (
		<Routes>
			<Route
				path='/home'
				element={
					<Home
						cartItems={cartItems}
						setCartItems={setCartItems}
					/>
				}
			/>
			<Route
				path='/cart'
				element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
			/>
			<Route
				path='/'
				element={<Menu />}
			/>
			<Route path='*' element={<Error />} />
		</Routes>
	)
}

export default Routing
