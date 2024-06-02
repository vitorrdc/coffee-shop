import {
  ButtonShoppingCartIconNormal,
  Characteristics,
  CoffeeTitle,
  FooterProductCard,
  Price,
  PriceContent,
  ProductCard,
  ProductDescription,
} from './styles'

import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import { ProductsContext, ProductsType } from '../../context/ProductsContext'

import { AddOrLessButton, ButtonContainer } from '../InputNumber/styles'
import { useContext } from 'react'

export function ProductCardComponent({
  image,
  characteristics,
  secondCharacteristics,
  thirdCharacteristics,
  name,
  description,
  price,
  amount,
  id,
  variant,
}: ProductsType) {
  const { onAddProduct, onMinusProduct, addProductToShoppingCart } =
    useContext(ProductsContext)

  const priceFormatted = price
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return (
    <ProductCard>
      <img src={image} alt="" />
      <div>
        <Characteristics>{characteristics}</Characteristics>
        {secondCharacteristics && (
          <Characteristics>{secondCharacteristics}</Characteristics>
        )}
        {thirdCharacteristics && (
          <Characteristics>{thirdCharacteristics}</Characteristics>
        )}
      </div>
      <CoffeeTitle> {name}</CoffeeTitle>
      <ProductDescription>{description}</ProductDescription>
      <FooterProductCard>
        <PriceContent>
          <div>R$</div>
          <Price>{priceFormatted}</Price>
        </PriceContent>
        <ButtonContainer>
          <AddOrLessButton onClick={() => onMinusProduct(id)}>
            <Minus size={16} color="#8047F8" className="minusIcon" />
          </AddOrLessButton>
          <div>{amount}</div>
          <AddOrLessButton onClick={() => onAddProduct(id)}>
            <Plus size={16} color="#8047F8" className="plusIcon" />
          </AddOrLessButton>
        </ButtonContainer>

        <ButtonShoppingCartIconNormal
          key={id}
          onClick={() => addProductToShoppingCart(id)}
          variant={variant}
        >
          <ShoppingCart size={17} color="#fafafa" weight="fill" />
        </ButtonShoppingCartIconNormal>
      </FooterProductCard>
    </ProductCard>
  )
}
