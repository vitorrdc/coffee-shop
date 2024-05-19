import { Trash } from '@phosphor-icons/react'
import Coffee from '../../assets/expresso.png'
import { InputNumber } from '../InputNumber/index'
import {
  CartContainer,
  ContentOfCartItem,
  Divider,
  ItemPrice,
  ProductImage,
} from './styles'

export function Cart() {
  return (
    <div>
      <CartContainer>
        <div>
          <ProductImage src={Coffee} alt="" />
          <ContentOfCartItem>
            <span>Expresso Tradicional</span>
            <div>
              <InputNumber />
              <button>
                <Trash size={16} color="#8047f8" />
                REMOVER
              </button>
            </div>
          </ContentOfCartItem>
        </div>
        <ItemPrice>R$ 9,90</ItemPrice>
      </CartContainer>
      <Divider />
    </div>
  )
}
