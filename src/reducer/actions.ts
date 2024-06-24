export enum ActionTypes {
  ADD_PRODUCT_TO_SHOPPING_CART = 'ADD_PRODUCT_TO_SHOPPING_CART',
  ON_ADD_SELECTED_PRODUCTS = 'ON_ADD_SELECTED_PRODUCTS',
  ON_MINUS_SELECTED_PRODUCTS = 'ON_MINUS_SELECTED_PRODUCTS',
  REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART',
}

export function addProducttoShoppingCartAction(id: number) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_SHOPPING_CART,
    payload: {
      id,
    },
  }
}

export function onAddSelectedProductsAction(id: number) {
  return {
    type: ActionTypes.ON_ADD_SELECTED_PRODUCTS,
    payload: {
      id,
    },
  }
}

export function onMinusSelectedProductsAction(id: number) {
  return {
    type: ActionTypes.ON_MINUS_SELECTED_PRODUCTS,
    payload: {
      id,
    },
  }
}

export function RemoveItemFromShoppingCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_SHOPPING_CART,
    payload: {
      id,
    },
  }
}
