import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
  padding-right: 10px;
  padding-left: 10px;

  height: 100px;
`;

export const Image = styled.img``;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const CartWrapper = styled.div`
  text-align: right;
  margin-right: 10px;
`;

export const CartTitle = styled.strong`
  display: block;
  color: #fff;
`;

export const CartBadge = styled.span`
  font-size: 1rem;
  color: #999;
`;
