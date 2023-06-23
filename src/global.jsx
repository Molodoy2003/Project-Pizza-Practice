import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	border: none;
	list-style: none;
  outline: none;
  box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}


ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}


/* Form */


button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

/*----------------- App global styles -----------------------*/

* {
	font-family: 'Nunito', sans-serif;
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
