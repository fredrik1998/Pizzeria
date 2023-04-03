import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStyle from '../../GlobalStyles'
import {StyledWrapper, GridContainer, GridItem, StyledH1, StyledText, StyledImage, StyledPrice, StyledLink} from './MenuscreenElements'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header' // Import the Header component
import { FaPizzaSlice } from 'react-icons/fa'
import Layout from '../../components/Layout'
const Menuscreen = () => {
  const [menuData, setMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/menu')
      .then(response => {
        const menuData = response.data.menu;
        setMenuData(menuData);
        setIsLoading(false)
      })
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <Layout>
  <GlobalStyle/>
  <Header/>
  {isLoading ? (
    <Loader/>
  ) : (
    <StyledWrapper>
    
      <GridContainer>
        <>
          {menuData.map((menuItem) => {
            return (
              <GridItem key={menuItem.id}>
                <StyledH1>{menuItem.name}</StyledH1>
                <StyledImage loading='lazy' src={menuItem.image_path} key={menuItem.image_path} />
                <StyledText>{menuItem.description}</StyledText>
                <StyledText>Size: {menuItem.size}</StyledText>
                <StyledPrice>${menuItem.price}</StyledPrice>
              </GridItem>
            )
          })}
        </>
      </GridContainer>
    </StyledWrapper>
  )}
</Layout>

    </>
  )
}

export default Menuscreen
