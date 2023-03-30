import React, { useContext, useMemo, useState } from 'react';
import { 
  StyledHeader,
  StyledLink, 
  StyledSeperator,
  StyledImg,
  StyledSpan,
  StyledCart,
  StyledLinkOrder
 } from './HeaderElements';
import img from '../../../public/pizzaicon.png'
import { FaShoppingBasket, FaPizzaSlice } from 'react-icons/fa';
import { CartContext } from '../../CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [location, setLocation] = useState(window.location.pathname)

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

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
     
    </StyledHeader>
  );
};

export default Header;
