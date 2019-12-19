import styled from 'styled-components';
import { darken } from 'polished';

export const ProductContainer = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 36px;
`;

export const ProductFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const FinalizarPedido = styled.button`
  background: #6c5ce7;
  color: #fff;
  border: none;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  font-weight: bold;
  align-items: center;

  padding: 10px 20px;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#6c5ce7')};
  }
`;

export const TotalPedidos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductTable = styled.table`
  width: 100%;
`;

export const ProductTableHeader = styled.thead``;

export const ProductTableTR = styled.tr``;

export const ProductTableTH = styled.th`
  text-align: left;
  color: #222222;
  padding: 12px;
`;

export const ProductTableTD = styled.td`
  padding: 12px;
  vertical-align: middle;
`;

export const ProductTableBody = styled.tbody``;

export const ProductImage = styled.img`
  height: 100px;
  align-items: center;
`;

export const TotalTitle = styled.span`
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export const TotalPrice = styled.strong`
  color: #333;
  display: block;
`;

export const Total = styled.div``;

export const ProductTitle = styled.span`
  display: block;
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export const ProductPrice = styled.strong`
  color: #333;
  display: block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonAdd = styled.button`
  border: 0;
  padding: 6px;
  background: none;
`;

export const ButtonRemove = styled.button`
  border: 0;
  padding: 6px;
  background: none;
`;

export const ProductItensQtd = styled.input`
  width: 50px;
  padding: 6px;
  border-radius: 6px;
`;

export const ProductSubTotal = styled.strong``;

export const ButtonDelete = styled.button`
  border: 0;
  padding: 6px;
  background: none;
`;
