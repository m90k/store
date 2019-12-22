import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket as Shop } from 'react-icons/md';

import { connect } from 'react-redux';

import {
  Container,
  Image,
  Cart,
  CartWrapper,
  CartTitle,
  CartBadge,
} from './styles';
import Logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <Image src={Logo} />
      </Link>

      <Cart to="/cart">
        <CartWrapper>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartBadge>{cartSize} Itens</CartBadge>
        </CartWrapper>
        <Shop size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
