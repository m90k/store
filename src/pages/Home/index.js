import React from 'react';

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

export default function Home() {
  return (
    <ProductList>
      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>
      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>
      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>

      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>

      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
            10
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>

      <ProductItem>
        <ProductImage
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <ProductName>Tenis</ProductName>
        <ProductPrice>R$: 100,00</ProductPrice>
        <ProductButton type="submit">
          <Icone>
            <IconCart size={16} color="#FFF" />
            10000000
          </Icone>

          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>
    </ProductList>
  );
}
