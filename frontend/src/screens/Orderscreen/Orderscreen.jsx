import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { 
    StyledContainer, 
    StyledItemContainer, 
    StyledH1, 
    StyledImage, 
    StyledPrice, 
    StyledButton,
    StyledTextButtonContainer,
    StyledTextContainer,
    StyledCartContainer,
    StyledCartItem
} from './OrderscreenElements'

const Orderscreen = () => {
    const [orderItems, setOrderItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get('api/menu')
        .then(response => {
            const orderItemsData = response.data.menu
            setOrderItems(orderItemsData)
        }).catch(console.error())
    }, [])

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <StyledContainer>
                {orderItems.map((item) => {
                    return(
                        <StyledItemContainer key={item.id}>
                            <StyledImage src={item.image_path} />
                            <StyledTextContainer>
                                <StyledH1>{item.name}</StyledH1>
                                <StyledPrice>${item.price}</StyledPrice>
                                <StyledPrice>{item.countInStock}</StyledPrice>
                            </StyledTextContainer>
                            <StyledTextButtonContainer>
                                <StyledButton onClick={() => addToCart(item)}>Add to cart</StyledButton>
                            </StyledTextButtonContainer>
                        </StyledItemContainer>
                    )
                })}
                 <StyledCartContainer>
                    <StyledH1>Cart Checkout</StyledH1>
                    {cartItems.map((item, index) => (
                        <StyledCartItem key={index}>
                            <div>{item.name}</div>
                            <div>${item.price}</div>
                        </StyledCartItem>
                    ))}
                </StyledCartContainer>
            </StyledContainer>
        </>
    )
}

export default Orderscreen
