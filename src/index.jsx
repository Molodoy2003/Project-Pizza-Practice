import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './redux/store.js'
import { PizzaContextProvider } from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <Provider store={store}>
	// 	<App />
	// </Provider>
	<PizzaContextProvider>
		<App/>
	</PizzaContextProvider>
)
