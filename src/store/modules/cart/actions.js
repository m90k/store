export function add(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function remove(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
