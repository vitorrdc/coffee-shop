import CoffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.png'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  Badge,
  HeaderContainer,
  Locale,
  LocaleAndCartShoppingContainer,
  ShoppingCartButton,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export function Header() {
  const { selectedProducts } = useContext(ProductsContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>

      <LocaleAndCartShoppingContainer>
        <Locale>
          <MapPin size={20} color="#8047F8" />
          Porto Alegre, RS
        </Locale>

        <NavLink to="/checkout">
          {selectedProducts.length > 0 ? (
            <ShoppingCartButton>
              <Badge>{selectedProducts.length}</Badge>
              <ShoppingCart size={20} weight="fill" color="#C47F17" />
            </ShoppingCartButton>
          ) : (
            <ShoppingCartButton>
              <ShoppingCart size={20} weight="fill" color="#C47F17" />
            </ShoppingCartButton>
          )}
        </NavLink>
      </LocaleAndCartShoppingContainer>
    </HeaderContainer>
  )
}
