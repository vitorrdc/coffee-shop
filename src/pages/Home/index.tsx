import { useContext } from 'react'
import { MainContent } from './MainContent'
import { ProductCardComponent } from '../../components/ProductCardComponent'
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
                secondCharacteristics={product.secondCharacteristics}
                thirdCharacteristics={product.thirdCharacteristics}
                description={product.description}
                amount={product.amount}
                image={product.image}
                name={product.name}
                price={product.price}
                id={product.id}
                variant={product.variant}
              />
            )
          })}
        </GridProductsContainer>
      </ProductsContainer>
    </>
  )
}
