import React, { Component } from 'react';
/** REDUX */
import { connect } from 'react-redux';
import { MdShoppingCart as IconCart } from 'react-icons/md';

import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
  Icone,
  ProductButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from './../../utils/format';
import * as CartActions from './../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
class Home extends Component {
  state = {
    products: [],
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(product => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
            <ProductButton
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <Icone>
                <IconCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </Icone>

              <ProductButtonText>Adicionar</ProductButtonText>
            </ProductButton>
          </ProductItem>
        ))}
      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
