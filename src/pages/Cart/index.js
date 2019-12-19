import React from 'react';
import {
  MdRemoveCircleOutline as IconRemove,
  MdAddCircleOutline as IconAdd,
  MdDelete as IconDelete,
} from 'react-icons/md';

import {
  ProductContainer,
  ProductTable,
  ProductTableHeader,
  ProductTableTH,
  ProductTableTR,
  ProductTableTD,
  ProductTableBody,
  FinalizarPedido,
  TotalPedidos,
  ProductFooter,
  ProductImage,
  TotalTitle,
  TotalPrice,
  ProductTitle,
  ProductPrice,
  ButtonAdd,
  ButtonRemove,
  ButtonDelete,
  ProductItensQtd,
  ProductSubTotal,
  ButtonContainer,
  Total,
} from './styles';

export default function Cart() {
  return (
    <ProductContainer>
      <ProductTable>
        <ProductTableHeader>
          <ProductTableTR>
            <ProductTableTH />
            <ProductTableTH>PRODUTO</ProductTableTH>
            <ProductTableTH>QTD</ProductTableTH>
            <ProductTableTH>SUBTOTAL</ProductTableTH>
            <ProductTableTH />
          </ProductTableTR>
        </ProductTableHeader>
        <ProductTableBody>
          <ProductTableTR>
            <ProductTableTD>
              <ProductImage
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_detalhe2.jpg?ims=326x"
                alt="Tenis"
              />
            </ProductTableTD>

            <ProductTableTD>
              <ProductTitle>Tenis 1</ProductTitle>
              <ProductPrice>R$ 100,00</ProductPrice>
            </ProductTableTD>

            <ProductTableTD>
              <ButtonContainer>
                <ButtonAdd type="button">
                  <IconAdd size={20} color="#6c5ce7" />
                </ButtonAdd>
                <ProductItensQtd type="number" readOnly value={2} />
                <ButtonRemove type="button">
                  <IconRemove size={20} color="#6c5ce7" />
                </ButtonRemove>
              </ButtonContainer>
            </ProductTableTD>

            <ProductTableTD>
              <ProductSubTotal>R$: 200,00</ProductSubTotal>
            </ProductTableTD>

            <ProductTableTD>
              <ButtonDelete type="button">
                <IconDelete size={20} color="#6c5ce7" />
              </ButtonDelete>
            </ProductTableTD>
          </ProductTableTR>
        </ProductTableBody>
      </ProductTable>

      <ProductFooter>
        <TotalPedidos>
          <FinalizarPedido type="submit">FINALIZAR COMPRA</FinalizarPedido>
          <Total>
            <TotalTitle>Total</TotalTitle>
            <TotalPrice>R$: 1000,00</TotalPrice>
          </Total>
        </TotalPedidos>
      </ProductFooter>
    </ProductContainer>
  );
}
