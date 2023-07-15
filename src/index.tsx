import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import normalize from './vendor/normalize.css'
import "./vendor/fonts/fonts.css";
import App from './App';
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
${normalize}
body, p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', 'Helvetica', sans-serif, Arial;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	color: black;
}
`
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
