import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { StyledContainer, StyledImage, StyledH1, StyledMotto, StyledDesc, StyledDescContainer} from './HomescreenElements'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../../public/pizzeria.webp'
import Layout from '../../components/Layout'

const Homescreen = () => {
  return (
    <>
    <Layout>
    <GlobalStyles/>
    <StyledContainer>
    <StyledImage src={img}></StyledImage>
    <StyledH1>Pizzetta</StyledH1>
    <StyledMotto>Personalized Pizzas, Perfectly Made</StyledMotto>
    <Navbar/>
    <StyledDescContainer>
    <StyledDesc>Welcome to Pizetta, a unique pizzeria that delivers an authentic taste of Italy. Our passionate chefs use only the finest ingredients to create mouth-watering pizzas that are cooked to perfection in our wood-fired oven. At Pizetta, we believe that good food brings people together, and that's why we strive to create a warm and welcoming atmosphere where you can enjoy our delicious pizzas with friends and family. From classic Margherita to spicy Pepperoni, our menu has something for everyone. We also offer vegetarian and seafood options for those with dietary restrictions. Our friendly staff are always on hand to make sure you have a great experience, whether you dine in or take away. Come and visit us at Pizetta and taste the difference for yourself.</StyledDesc>
    </StyledDescContainer>
    </StyledContainer>
    </Layout>
    </>
  )
}

export default Homescreen