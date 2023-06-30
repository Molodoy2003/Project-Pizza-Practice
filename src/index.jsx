import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PizzaContextProvider } from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<PizzaContextProvider>
		<App/>
	</PizzaContextProvider>
)
