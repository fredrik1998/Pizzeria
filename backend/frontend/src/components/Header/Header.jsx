import React, { useContext, useMemo, useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaShoppingBasket } from 'react-icons/fa';
import { CartContext } from '../../CartContext';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledImg, StyledLink, StyledLinkOrder, StyledSeperator, StyledCart, StyledSpan, StyledButton } from './HeaderElements';

import img from '../../../public/pizzaicon.png';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [location, setLocation] = useState(window.location.pathname);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    navigate('/');
  };

  const renderCart = () => {
    if (location === '/order') {
      return (
        <StyledCart>
          <FaShoppingBasket />
          {cartItemCount > 0 && <StyledSpan>{cartItemCount}</StyledSpan>}
        </StyledCart>
      );
    }
    return null;
  };

  const renderOrderLink = () => {
    if (location === '/menu') {
      return (
        <StyledLinkOrder to="/order">
          Order here
        </StyledLinkOrder>
      );
    }
    return null;
  };

  const renderUserPanel = () => {
    if (user && location === '/admin') {
      return (
        <Box sx={{ marginTop: '10px' }}>
          <Accordion style={{ background: 'none', boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="user-panel-content"
              id="user-panel-header"
              style={{ background: 'none' }}
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
      );
    }
    return null;
  };

  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledImg src={img} />
        Pizzetta
      </StyledLink>
      {renderCart()}
      {renderOrderLink()}
      {renderUserPanel()}
    </StyledHeader>
  );
};

export default Header;
