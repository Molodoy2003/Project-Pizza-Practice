import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App.jsx'
import { store } from './redux/store.js'

const Global = createGlobalStyle`
	* {
  padding: 0;
  margin: 0; 
  list-style: none;
  outline: none;
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #232323;
  background-color: #ffdf8c;
}

a,
span,
p,
b,
h1,
h2,
h3,
h4,
h5 {
  color: #232323;
}

h1 {
  font-size: 48px;
}

h2 {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
}

a {
  text-decoration: none;
}
`

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Global />
			<App />
		</Provider>
	</BrowserRouter>
)
