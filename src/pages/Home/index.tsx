import { useContext } from 'react'
import { MainContent } from './MainContent'
import { ProductCardComponent } from './ProductCardComponent'
import {
  GridProductsContainer,
  ProductsContainer,
  TitleOfContainer,
} from './styles'
import { ProductsContext } from '../../context/ProductsContext'

export function Home() {
  const { catalogProducts } = useContext(ProductsContext)

  return (
    <>
      <MainContent />
      <ProductsContainer>
        <TitleOfContainer>Nossos Cafés</TitleOfContainer>
        <GridProductsContainer>
          {catalogProducts.map((product) => {
            return (
              <ProductCardComponent
                key={product.id}
                characteristics={product.characteristics}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            )
          })}
        </GridProductsContainer>
      </ProductsContainer>
    </>
  )
}
