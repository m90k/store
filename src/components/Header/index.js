import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket as Shop } from 'react-icons/md';

import {
  Container,
  Image,
  Cart,
  CartWrapper,
  CartTitle,
  CartBadge,
} from './styles';
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Image src={Logo} />
      </Link>

      <Cart to="/cart">
        <CartWrapper>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartBadge>3</CartBadge>
        </CartWrapper>
        <Shop size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
