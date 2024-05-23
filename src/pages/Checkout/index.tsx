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
  PaymentFormContainer,
  PaymentMethodContainer,
  PaymentOptionLabel,
  PaymentRadio,
  SelectedsCoffees,
  SubTotalLineContainer,
  Subtitle,
  TotalLineContainer,
  UFInput,
  WithoutSelectedProducts,
} from './styles'
import { Cart } from '../../components/Cart'
import { useContext, useEffect, useState } from 'react'
import {
  ProductsContext,
  SuccesPurchaseOrderType,
} from '../../context/ProductsContext'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { selectedProducts, setSuccessPurchaseOrder } =
    useContext(ProductsContext)

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

  const { register, handleSubmit, watch } = useForm()
  const selectedPayment = watch('payment')

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
      formaPagamento: data.formaPagamento,
    }

    setSuccessPurchaseOrder([newObj])

    navigate('/success')
  }

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
              {...register('cep', { required: true })}
            />
            <AdressInput type="text" placeholder="Rua" {...register('rua')} />
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Número"
              {...register('numero', { required: true })}
            />
            <ComplementInput
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Bairro"
              {...register('bairro', { required: 'Preencha este campo.' })}
            />
            <CityInput
              type="text"
              placeholder="Cidade"
              {...register('cidade', { required: true })}
            />
            <UFInput
              type="text"
              placeholder="UF"
              {...register('uf', { required: true, maxLength: 2 })}
            />
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

          <PaymentMethodContainer>
            <PaymentOptionLabel
              htmlFor="Cartão de Crédito"
              checked={selectedPayment === 'crédito'}
            >
              <PaymentRadio
                id="Cartão de Crédito"
                type="radio"
                value="Cartão de Crédito"
                {...register('formaPagamento', { required: true })}
              />
              <CreditCard size={16} color="#8047f8" />
              CARTÃO DE CRÉDITO
            </PaymentOptionLabel>
            <PaymentOptionLabel
              htmlFor="Cartão de Débito"
              checked={selectedPayment === 'débito'}
            >
              <PaymentRadio
                id="Cartão de Débito"
                type="radio"
                value="Cartão de Débito"
                {...register('formaPagamento', { required: true })}
              />
              <Bank size={16} color="#8047f8" />
              CARTÃO DE DÉBITO
            </PaymentOptionLabel>
            <PaymentOptionLabel
              htmlFor="Dinheiro"
              checked={selectedPayment === 'dinheiro'}
            >
              <PaymentRadio
                id="Dinheiro"
                type="radio"
                value="Dinheiro"
                {...register('formaPagamento', { required: true })}
              />
              <Money size={16} color="#8047f8" />
              DINHEIRO
            </PaymentOptionLabel>
          </PaymentMethodContainer>
        </PaymentFormContainer>
      </div>
      <div>
        <Subtitle>Cafés selecionados</Subtitle>
        <SelectedsCoffees>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => {
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
            })
          ) : (
            <WithoutSelectedProducts>
              Ops! Não há produtos selecionados.
            </WithoutSelectedProducts>
          )}

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
