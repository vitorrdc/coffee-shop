import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  BoxContainer,
  BoxIconContainer,
  CoffeeContainer,
  CoffeeIconContainer,
  HomeContainer,
  HomeSlogan,
  HomeSubSlogan,
  LeftIconsContainer,
  RightIconsContainer,
  ShoppingCartContainer,
  ShoppingCartIconContainer,
  TimerContainer,
  TimerIconContainer,
  TopcsContainer,
} from './styles'

import HomeImage from '../../../assets/homeImage.png'

export function MainContent() {
  return (
    <HomeContainer>
      <div>
        <HomeSlogan>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </HomeSlogan>
        <HomeSubSlogan>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </HomeSubSlogan>
        <TopcsContainer>
          <LeftIconsContainer>
            <ShoppingCartContainer>
              <ShoppingCartIconContainer>
                <ShoppingCart size={16} weight="fill" color="#fafafa" />
              </ShoppingCartIconContainer>
              <span>Compra simples e segura</span>
            </ShoppingCartContainer>
            <TimerContainer>
              <TimerIconContainer>
                <Timer size={16} color="#fafafa" weight="fill" />
              </TimerIconContainer>
              <span>Entrega rápida e rastreada</span>
            </TimerContainer>
          </LeftIconsContainer>

          <RightIconsContainer>
            <BoxContainer>
              <BoxIconContainer>
                <Package size={16} color="#fafafa" weight="fill" />
              </BoxIconContainer>
              <span>Embalagem mantém o café intacto</span>
            </BoxContainer>

            <CoffeeContainer>
              <CoffeeIconContainer>
                <Coffee size={16} color="#fafafa" weight="fill" />
              </CoffeeIconContainer>
              <span>O café chega fresquinho até você</span>
            </CoffeeContainer>
          </RightIconsContainer>
        </TopcsContainer>
      </div>

      <img src={HomeImage} alt="" />
    </HomeContainer>
  )
}
