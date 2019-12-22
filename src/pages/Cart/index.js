import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline as IconRemove,
  MdAddCircleOutline as IconAdd,
  MdDelete as IconDelete,
} from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, remove, total, updateAmount }) {
  function AddProduct(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function RemoveProduct(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <ProductContainer>
      <ProductTable>
        <ProductTableHeader>
          <ProductTableTR>
            <ProductTableTH />
            <ProductTableTH>PRODUTO</ProductTableTH>
            <ProductTableTH>QUANTIDADE</ProductTableTH>
            <ProductTableTH>SUBTOTAL</ProductTableTH>
            <ProductTableTH />
          </ProductTableTR>
        </ProductTableHeader>
        <ProductTableBody>
          {cart.map(product => (
            <ProductTableTR>
              <ProductTableTD>
                <ProductImage src={product.image} alt={product.title} />
              </ProductTableTD>

              <ProductTableTD>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductTableTD>

              <ProductTableTD>
                <ButtonContainer>
                  <ButtonAdd type="button" onClick={() => AddProduct(product)}>
                    <IconAdd size={20} color="#6c5ce7" />
                  </ButtonAdd>
                  <ProductItensQtd
                    type="number"
                    readOnly
                    value={product.amount}
                  />
                  <ButtonRemove
                    type="button"
                    onClick={() => RemoveProduct(product)}
                  >
                    <IconRemove size={20} color="#6c5ce7" />
                  </ButtonRemove>
                </ButtonContainer>
              </ProductTableTD>

              <ProductTableTD>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductTableTD>

              <ProductTableTD>
                <ButtonDelete type="button" onClick={() => remove(product.id)}>
                  <IconDelete size={20} color="#6c5ce7" />
                </ButtonDelete>
              </ProductTableTD>
            </ProductTableTR>
          ))}
        </ProductTableBody>
      </ProductTable>

      <ProductFooter>
        <TotalPedidos>
          <FinalizarPedido type="submit">FINALIZAR COMPRA</FinalizarPedido>
          <Total>
            <TotalTitle>Total</TotalTitle>
            <TotalPrice>{total}</TotalPrice>
          </Total>
        </TotalPedidos>
      </ProductFooter>
    </ProductContainer>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),

  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
