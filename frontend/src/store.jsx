import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { composeWithDevTools } from '@redux-devtools/extension';
const reducer = combineReducers({
    cart : cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')) : []

 const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? 
 JSON.parse(localStorage.getItem('userInfo')) : null

 const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? 
 JSON.parse(localStorage.getItem('userInfo')) : {}

const initialState = {
    cart: {cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage},
    userLogin: {userInfo: userInfoFromLocalStorage}   
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store