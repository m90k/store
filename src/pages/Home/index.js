import React, { Component } from 'react';

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

export default class Home extends Component {
  state = {
    products: [],
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
    return (
      <ProductList>
        {products.map(product => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
            <ProductButton type="submit">
              <Icone>
                <IconCart size={16} color="#FFF" />
                10
              </Icone>

              <ProductButtonText>Adicionar</ProductButtonText>
            </ProductButton>
          </ProductItem>
        ))}
      </ProductList>
    );
  }
}
