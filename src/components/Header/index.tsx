import CoffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.png'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  Locale,
  LocaleAndCartShoppingContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          <button>
            <ShoppingCart size={20} weight="fill" color="#C47F17" />
          </button>
        </NavLink>
      </LocaleAndCartShoppingContainer>
    </HeaderContainer>
  )
}
