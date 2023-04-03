import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './CartContext'
import {UserProvider } from './UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
    <CartProvider>
    <HashRouter>
    <App />
    </HashRouter>
    </CartProvider>
    </UserProvider>
)
