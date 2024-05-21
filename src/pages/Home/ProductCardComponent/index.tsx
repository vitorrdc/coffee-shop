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

import { ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../../../components/InputNumber'
import { ProductsType } from '../../../context/ProductsContext'

export function ProductCardComponent({
  image,
  characteristics,
  name,
  description,
  price,
}: ProductsType) {
  return (
    <ProductCard>
      <img src={image} alt="" />
      <Characteristics>{characteristics}</Characteristics>
      <CoffeeTitle> {name}</CoffeeTitle>
      <ProductDescription>{description}</ProductDescription>
      <FooterProductCard>
        <PriceContent>
          <div>R$</div>
          <Price>{price}</Price>
        </PriceContent>
        <InputNumber />
        <ButtonShoppingCartIcon>
          <ShoppingCart size={17} color="#fafafa" weight="fill" />
        </ButtonShoppingCartIcon>
      </FooterProductCard>
    </ProductCard>
  )
}
