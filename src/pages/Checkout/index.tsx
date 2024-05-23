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
  PaymentRadio,
  SelectedsCoffees,
  SubTotalLineContainer,
  Subtitle,
  TotalLineContainer,
  UFInput,
} from './styles'
import { Cart } from '../../components/Cart'
import { useContext, useEffect, useState } from 'react'
import {
  ProductsContext,
  SuccesPurchaseOrderType,
} from '../../context/ProductsContext'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

export function Checkout() {
  const {
    selectedProducts,
    setSuccessPurchaseOrder,
    successPurchaseOrder,
    setPaymentForm,
    paymentForm,
  } = useContext(ProductsContext)

  const [totalProductsPrice, setTotalProductsPrice] = useState<
    number | null | string
  >(null)

  const [purchaseOrderPrice, setPurchaseOrderPrice] = useState<
    number | null | string
  >(null)
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL',
  }

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  function sumTotalPrice() {
    const subTotalPrice = selectedProducts.map((product) => {
      return product.amount * product.price
    })
    const sumSubTotal = subTotalPrice.reduce((acc, curr) => acc + curr, 0)

    const totalPriceOfPurchaseOrder = sumSubTotal + 3.5

    setTotalProductsPrice(
      sumSubTotal.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    )

    if (totalProductsPrice === 0) {
      setPurchaseOrderPrice(0)
    }

    if (totalPriceOfPurchaseOrder > 0) {
      setPurchaseOrderPrice(
        totalPriceOfPurchaseOrder.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }),
      )
    }
  }

  function handleCreditPaymentForm() {
    setPaymentForm('CARTÃO DE CRÉDITO')
  }

  function handleDebitPaymentForm() {
    setPaymentForm('CARTÃO DE DÉBITO')
  }
  function handleMoneyPaymentForm() {
    setPaymentForm('DINHEIRO')
  }

  useEffect(() => {
    sumTotalPrice()
  }, [selectedProducts])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newObj: SuccesPurchaseOrderType = {
      rua: data.rua,
      bairro: data.bairro,
      cidade: data.cidade,
      numero: data.numero,
      uf: data.uf,
      cep: data.cep,
    }

    setSuccessPurchaseOrder([newObj])
  }
  console.log(successPurchaseOrder)

  console.log(paymentForm)

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
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
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="CEP"
              {...register('cep')}
            />
            <AdressInput type="text" placeholder="Rua" {...register('rua')} />
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Número"
              {...register('número')}
            />
            <ComplementInput
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Bairro"
              {...register('bairro')}
            />
            <CityInput
              type="text"
              placeholder="Cidade"
              {...register('cidade')}
            />
            <UFInput type="text" placeholder="UF" {...register('uf')} />
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
            <PaymentButton onClick={handleCreditPaymentForm}>
              <CreditCard size={16} color="#8047f8" />
              CARTÃO DE CRÉDITO
            </PaymentButton>
            <PaymentButton onClick={handleDebitPaymentForm}>
              <Bank size={16} color="#8047f8" />
              CARTÃO DE DÉBITO
            </PaymentButton>
            <PaymentButton onClick={handleMoneyPaymentForm}>
              <Money size={16} color="#8047f8" />
              DINHEIRO
            </PaymentButton>
            {/* <label htmlFor="creditCart">CARTÃO DE CRÉDITO</label>
            <PaymentRadio type="radio" {...register('creditCard')} /> */}
          </div>
        </PaymentFormContainer>
      </div>
      <div>
        <Subtitle>Cafés selecionados</Subtitle>
        <SelectedsCoffees>
          {selectedProducts.map((product) => {
            return (
              <Cart
                amount={product.amount}
                image={product.image}
                name={product.name}
                price={product.price.toLocaleString('pt-br', options)}
                key={product.id}
                id={product.id}
              />
            )
          })}
          <SubTotalLineContainer>
            <div>Total dos itens</div>
            <span>{totalProductsPrice}</span>
          </SubTotalLineContainer>
          <SubTotalLineContainer>
            <div>Entrega</div>
            <span>R$3,50</span>
          </SubTotalLineContainer>
          <TotalLineContainer>
            <div>Total</div>
            <span>{purchaseOrderPrice}</span>
          </TotalLineContainer>
          <ButtonToConfirm type="submit">CONFIRMAR PEDIDO</ButtonToConfirm>
        </SelectedsCoffees>
      </div>
    </CheckoutContainer>
  )
}
