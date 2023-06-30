import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Error from '../pages/Error'
import Home from '../pages/Home'

const Routing = ({ cartItems, setCartItems }) => {
	return (
		<Routes>
			<Route
				path='/'
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
			<Route path='*' element={<Error />} />
		</Routes>
	)
}

export default Routing
