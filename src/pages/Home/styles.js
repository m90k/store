import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
`;

export const ProductImage = styled.img`
  align-self: center;
  max-width: 260px;
`;

export const ProductName = styled.strong`
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 20px;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

export const ProductPrice = styled.span`
  text-transform: uppercase;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ProductButton = styled.button`
  background: #6c5ce7;
  color: #fff;
  border: none;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#6c5ce7')};
  }
`;

export const Icone = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 12px;
`;

export const ProductButtonText = styled.span`
  flex: 1;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
