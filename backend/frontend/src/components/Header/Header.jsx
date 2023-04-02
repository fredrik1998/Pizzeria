import React, { useContext, useMemo, useState } from 'react';
import { 
  StyledHeader,
  StyledLink, 
  StyledSeperator,
  StyledImg,
  StyledSpan,
  StyledCart,
  StyledLinkOrder,
  StyledButton
 } from './HeaderElements';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../../../public/pizzaicon.png'
import { FaShoppingBasket, FaPizzaSlice } from 'react-icons/fa';
import { CartContext } from '../../CartContext';
import { UserContext } from '../../UserContext';
import { Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate()
 
  const [location, setLocation] = useState(window.location.pathname)

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    navigate('/')
  };

  return (
    <StyledHeader>
      <StyledLink to='/'>
        <StyledImg src={img} />
        Pizzetta
      </StyledLink>
      {location === '/order' ? (
         <StyledCart>
         <FaShoppingBasket/>
         {cartItemCount > 0 && <StyledSpan>{cartItemCount}</StyledSpan>}
       </StyledCart>
      ) : (
        null  
      )}
      {location === '/menu' ? (
        <StyledLinkOrder to='/order'>
          Order here
          </StyledLinkOrder>
      ) : (
        null
      )}
     {user && location ==='/admin' ? (
  <Box sx={{ marginTop: '10px' }}>
    <Accordion style={{background: 'none', boxShadow: 'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="user-panel-content"
        id="user-panel-header"
        style={{background: 'none'}}
      >
        <Typography>{user.username}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <StyledButton onClick={handleLogout}>
          Logout
        </StyledButton>
      </AccordionDetails>
    </Accordion>
  </Box>
) : null}



    </StyledHeader>
  );
};

export default Header;
