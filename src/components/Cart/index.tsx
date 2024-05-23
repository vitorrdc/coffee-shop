import { Trash } from '@phosphor-icons/react'

import { InputNumber } from '../InputNumber/index'
import {
  CartContainer,
  ContentOfCartItem,
  Divider,
  ItemPrice,
  ProductImage,
} from './styles'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export interface CartProps {
  id: number
  amount: number
  image: string
  name: string
  price: any
}

export function Cart({ image, name, amount, price, id }: CartProps) {
  const {
    onAddSelectedProducts,
    onMinusSelectedProducts,
    removeItemFromShoppingCart,
  } = useContext(ProductsContext)

  return (
    <div>
      <CartContainer>
        <div>
          <ProductImage src={image} alt="" />
          <ContentOfCartItem>
            <span>{name}</span>
            <div>
              <InputNumber
                amount={amount}
                onAddProductFunction={() => onAddSelectedProducts(id)}
                onMinusProductFunction={() => onMinusSelectedProducts(id)}
              />
              <button onClick={() => removeItemFromShoppingCart(id)}>
                <Trash size={16} color="#8047f8" />
                REMOVER
              </button>
            </div>
          </ContentOfCartItem>
        </div>
        <ItemPrice>{price}</ItemPrice>
      </CartContainer>
      <Divider />
    </div>
  )
}
