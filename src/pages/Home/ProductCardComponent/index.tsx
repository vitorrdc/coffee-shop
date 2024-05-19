import {
  ButtonShoppingCartIcon,
  Characteristics,
  CoffeeTitle,
  FooterProductCard,
  Price,
  PriceContent,
  ProductCard,
  ProductDescription,
} from './styles'

import Expresso from '../../../assets/expresso.png'

import { ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../../../components/InputNumber'

export function ProductCardComponent() {
  return (
    <ProductCard>
      <img src={Expresso} alt="" />
      <Characteristics>TRADICIONAL</Characteristics>
      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
      <ProductDescription>
        O tradiconal café feito com água <br />
        quente e grãos moídos
      </ProductDescription>
      <FooterProductCard>
        <PriceContent>
          <div>R$</div>
          <Price>9,90</Price>
        </PriceContent>
        <InputNumber />
        <ButtonShoppingCartIcon>
          <ShoppingCart size={17} color="#fafafa" weight="fill" />
        </ButtonShoppingCartIcon>
      </FooterProductCard>
    </ProductCard>
  )
}
