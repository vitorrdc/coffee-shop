import { useState } from 'react'
import { MainContent } from './MainContent'
import { ProductCardComponent } from './ProductCardComponent'
import {
  GridProductsContainer,
  ProductsContainer,
  TitleOfContainer,
} from './styles'

export function Home() {
  const [products, setProducts] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ])

  console.log(products)

  return (
    <>
      <MainContent />
      <ProductsContainer>
        <TitleOfContainer>Nossos Cafés</TitleOfContainer>
        <GridProductsContainer>
          {products.map((product, index) => {
            return <ProductCardComponent key={index} />
          })}
        </GridProductsContainer>
      </ProductsContainer>
    </>
  )
}
