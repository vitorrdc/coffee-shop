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
import { ErrorMessage } from '@hookform/error-message'

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

  const [selectedPayment, setSelectedPayment] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    const subTotalPrice = selectedProducts.map((product) => {
      const priceAsNumber =
        typeof product.price === 'number'
          ? product.price
          : parseFloat(product.price.replace(/[^\d.-]/g, ''))
      return priceAsNumber * product.amount
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
  }, [selectedProducts, totalProductsPrice])

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

  function handleCreditCardPaymentForm() {
    setSelectedPayment('Cartão de Crédito')
  }

  function handleDebitCardPaymentForm() {
    setSelectedPayment('Cartão de Débito')
  }

  function handleMoneyPaymentForm() {
    setSelectedPayment('Dinheiro')
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
              className={errors.cep ? 'error' : ''}
              {...register('cep', {
                required: true,
              })}
            />

            <AdressInput
              type="text"
              placeholder="Rua"
              className={errors.rua ? 'error' : ''}
              {...register('rua', {
                required: true,
              })}
            />

            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Número"
              className={errors.numero ? 'error' : ''}
              {...register('numero', {
                required: true,
              })}
            />

            <ComplementInput
              type="text"
              placeholder="Complemento"
              className={errors.complemento ? 'error' : ''}
              {...register('complemento', { required: true })}
            />
            <CEPNumberAndNeighborhoodInput
              type="text"
              placeholder="Bairro"
              className={errors.bairro ? 'error' : ''}
              {...register('bairro', {
                required: true,
              })}
            />

            <CityInput
              type="text"
              placeholder="Cidade"
              className={errors.cidade ? 'error' : ''}
              {...register('cidade', {
                required: true,
              })}
            />

            <UFInput
              type="text"
              placeholder="UF"
              className={errors.uf ? 'error' : ''}
              {...register('uf', {
                required: true,
              })}
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
              checked={selectedPayment === 'Cartão de Crédito'}
              onClick={handleCreditCardPaymentForm}
            >
              <PaymentRadio
                id="Cartão de Crédito"
                type="radio"
                value="Cartão de Crédito"
                {...register('formaPagamento', {
                  required: 'Favor selecionar alguma forma de pagamento.',
                })}
              />
              <CreditCard size={16} color="#8047f8" />
              CARTÃO DE CRÉDITO
            </PaymentOptionLabel>
            <PaymentOptionLabel
              htmlFor="Cartão de Débito"
              checked={selectedPayment === 'Cartão de Débito'}
              onClick={handleDebitCardPaymentForm}
            >
              <PaymentRadio
                id="Cartão de Débito"
                type="radio"
                value="Cartão de Débito"
                {...register('formaPagamento', {
                  required: 'Favor selecionar alguma forma de pagamento.',
                })}
              />
              <Bank size={16} color="#8047f8" />
              CARTÃO DE DÉBITO
            </PaymentOptionLabel>
            <PaymentOptionLabel
              htmlFor="Dinheiro"
              checked={selectedPayment === 'Dinheiro'}
              onClick={handleMoneyPaymentForm}
            >
              <PaymentRadio
                id="Dinheiro"
                type="radio"
                value="Dinheiro"
                {...register('formaPagamento', {
                  required: 'Favor selecionar alguma forma de pagamento.',
                })}
              />
              <Money size={16} color="#8047f8" />
              DINHEIRO
            </PaymentOptionLabel>
          </PaymentMethodContainer>
          <ErrorMessage
            errors={errors}
            name="formaPagamento"
            render={({ message }) => <p>{message}</p>}
          />
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
                  variant={product.variant}
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
