import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AdressInput,
  ButtonToConfirm,
  CEPNumberAndNeighborhoodInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  DescriptionOfLabel,
  FormContainer,
  InputArea,
  PaymentButton,
  PaymentFormContainer,
  SelectedsCoffees,
  SubTotalLineContainer,
  Subtitle,
  TotalLineContainer,
  UFInput,
} from './styles'
import { Cart } from '../../components/Cart'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Subtitle>Complete seu pedido</Subtitle>
        <FormContainer>
          <div>
            <MapPinLine size={22} color="#c47f17" />
            <span>Endereço de Entrega</span>
          </div>
          <DescriptionOfLabel>
            Informe o endereço onde deseja receber seu pedido
          </DescriptionOfLabel>
          <InputArea>
            <CEPNumberAndNeighborhoodInput type="text" placeholder="CEP" />
            <AdressInput type="text" placeholder="Rua" />
            <CEPNumberAndNeighborhoodInput type="text" placeholder="Número" />
            <ComplementInput type="text" placeholder="Complemento" />
            <CEPNumberAndNeighborhoodInput type="text" placeholder="Bairro" />
            <CityInput type="text" placeholder="Cidade" />
            <UFInput type="text" placeholder="UF" />
          </InputArea>
        </FormContainer>
        <PaymentFormContainer>
          <div>
            <CurrencyDollar size={22} color="#8047f8" />
            <span>Pagamento</span>
          </div>
          <DescriptionOfLabel>
            Informe o endereço onde deseja receber seu pedido
          </DescriptionOfLabel>
          <div>
            <PaymentButton>
              <CreditCard size={16} color="#8047f8" />
              CARTÃO DE CRÉDITO
            </PaymentButton>
            <PaymentButton>
              <Bank size={16} color="#8047f8" />
              CARTÃO DE DÉBITO
            </PaymentButton>
            <PaymentButton>
              <Money size={16} color="#8047f8" />
              DINHEIRO
            </PaymentButton>
          </div>
        </PaymentFormContainer>
      </div>
      <div>
        <Subtitle>Cafés selecionados</Subtitle>
        <SelectedsCoffees>
          <Cart />
          <Cart />
          <SubTotalLineContainer>
            <div>Total dos itens</div>
            <span>R$29,70</span>
          </SubTotalLineContainer>
          <SubTotalLineContainer>
            <div>Entrega</div>
            <span>R$3,50</span>
          </SubTotalLineContainer>
          <TotalLineContainer>
            <div>Total</div>
            <span>R$33,20</span>
          </TotalLineContainer>
          <ButtonToConfirm>CONFIRMAR PEDIDO</ButtonToConfirm>
        </SelectedsCoffees>
      </div>
    </CheckoutContainer>
  )
}
