import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import Motorcycle from '../../assets/motocycle.png'
import {
  ConfirmedPurchaseContainer,
  DeliveryResumeContainer,
  Description,
  DescriptionDetailsContainer,
  HeroContent,
  ImageContainer,
  LocaleIconContainer,
  SuccessContainer,
  TimeIconContainer,
  ValueIconContainer,
} from './styles'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export function Success() {
  const { successPurchaseOrder } = useContext(ProductsContext)

  return (
    <SuccessContainer>
      <ConfirmedPurchaseContainer>
        <HeroContent>
          <div>Uhu! Pedido confirmado</div>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </HeroContent>

        {successPurchaseOrder.map((delivery, index) => {
          return (
            <DeliveryResumeContainer key={index}>
              <DescriptionDetailsContainer>
                <LocaleIconContainer>
                  <MapPin size={16} color="#fafafa" weight="fill" />
                </LocaleIconContainer>
                <div>
                  <Description>
                    Entrega em{' '}
                    <span>{`${delivery.rua}, ${delivery.numero}`}</span>
                  </Description>
                  <Description>{`${delivery.bairro} - ${delivery.cidade}, ${delivery.uf}`}</Description>
                </div>
              </DescriptionDetailsContainer>
              <DescriptionDetailsContainer>
                <TimeIconContainer>
                  <Timer size={16} color="#fafafa" weight="fill" />
                </TimeIconContainer>
                <div>
                  <Description>Previsão de entrega</Description>
                  <Description>
                    <span>20 min - 30 min</span>
                  </Description>
                </div>
              </DescriptionDetailsContainer>
              <DescriptionDetailsContainer>
                <ValueIconContainer>
                  <CurrencyDollar size={16} color="#fafafa" weight="fill" />
                </ValueIconContainer>
                <div>
                  <Description>Pagamento na entrega</Description>
                  <Description>
                    <span>{delivery.formaPagamento}</span>
                  </Description>
                </div>
              </DescriptionDetailsContainer>
            </DeliveryResumeContainer>
          )
        })}
      </ConfirmedPurchaseContainer>
      <ImageContainer>
        <img src={Motorcycle} alt="" />
      </ImageContainer>
    </SuccessContainer>
  )
}
