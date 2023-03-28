import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { CartProvider } from './CartContext'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
)
