import { ReactNode, createContext, useState } from 'react'
import TraditionalExpresso from '../assets/expresso.png'
import AmericanExpress from '../assets/americanExpress.png'
import Creamy from '../assets/creamy.png'
import IceCream from '../assets/iceCream.png'
import CoffeWMilt from '../assets/coffeeWMilk.png'
import Latte from '../assets/latte.png'
import Capuccino from '../assets/capuccino.png'
import Macchiato from '../assets/macchiato.png'
import Mocaccino from '../assets/mocaccino.png'
import HotChoccolate from '../assets/hotChocolate.png'
import Cuban from '../assets/cubano.png'
import Hawaiian from '../assets/havaian.png'
import Arabic from '../assets/arabic.png'
import Irish from '../assets/irish.png'
import { CartProps } from '../components/Cart'

export interface ProductsType {
  id: number
  image: string
  characteristics: string
  secondCharacteristics?: string
  thirdCharacteristics?: string
  name: string
  description: string
  amount: number
  price: number | string
  variant: 'primary' | 'secondary'
}

export interface SuccesPurchaseOrderType {
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  cep: number
  formaPagamento: string
}

interface CatalogProductsContextType {
  catalogProducts: ProductsType[]
  selectedProducts: CartProps[]
  successPurchaseOrder: SuccesPurchaseOrderType[]
  paymentForm: string
  setPaymentForm: (data: string) => void
  setSuccessPurchaseOrder: (data: SuccesPurchaseOrderType[]) => void
  setCatalogProducts: (data: ProductsType[]) => void
  onAddProduct: (data: number) => void
  onMinusProduct: (data: number) => void
  addProductToShoppingCart: (data: number) => void
  onAddSelectedProducts: (
    event: React.MouseEvent<HTMLButtonElement>,
    data: number,
  ) => void
  onMinusSelectedProducts: (
    event: React.MouseEvent<HTMLButtonElement>,
    data: number,
  ) => void
  removeItemFromShoppingCart: (data: number) => void
}

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as CatalogProductsContextType)

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [catalogProducts, setCatalogProducts] = useState<ProductsType[]>([
    {
      id: 1,
      image: TraditionalExpresso,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 2,
      image: AmericanExpress,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 3,
      image: Creamy,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 4,
      image: IceCream,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'GELADO',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 5,
      image: CoffeWMilt,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 6,
      image: Latte,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 7,
      image: Capuccino,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 8,
      image: Macchiato,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 9,
      image: Mocaccino,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 10,
      image: HotChoccolate,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 11,
      image: Cuban,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'ALCOÓLICO',
      thirdCharacteristics: 'GELADO',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 12,
      image: Hawaiian,
      characteristics: 'ESPECIAL',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 13,
      image: Arabic,
      characteristics: 'ESPECIAL',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
    {
      id: 14,
      image: Irish,
      characteristics: 'ESPECIAL',
      secondCharacteristics: 'ALCOÓLICO',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      amount: 1,
      price: 9.9,
      variant: 'primary',
    },
  ])

  const [selectedProducts, setSelectedProducts] = useState<ProductsType[]>([])

  const [successPurchaseOrder, setSuccessPurchaseOrder] = useState<
    SuccesPurchaseOrderType[]
  >([])

  const [paymentForm, setPaymentForm] = useState<string>('')

  function onAddProduct(id: number) {
    const newAmount = catalogProducts.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 }
      }
      return product
    })
    setCatalogProducts(newAmount)
  }

  function onAddSelectedProducts(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()
    const newAmount = selectedProducts.map((product) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 }
      }
      return product
    })
    setSelectedProducts(newAmount)
  }

  function onMinusProduct(id: number) {
    const newAmount = catalogProducts.map((product) => {
      if (product.id === id && product.amount >= 1) {
        return { ...product, amount: product.amount - 1 }
      }

      return product
    })
    setCatalogProducts(newAmount)
  }

  function onMinusSelectedProducts(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()
    const newAmount = selectedProducts.map((product) => {
      if (product.id === id && product.amount >= 1) {
        return { ...product, amount: product.amount - 1 }
      }

      return product
    })
    setSelectedProducts(newAmount)
  }

  function addProductToShoppingCart(id: number) {
    const productToFind = catalogProducts.find((product) => product.id === id)

    if (productToFind) {
      setSelectedProducts((prevState) => {
        const productExists = prevState.some((product) => product.id === id)

        if (!productExists) {
          return [...prevState, { ...productToFind, variant: 'secondary' }]
        } else {
          return prevState.map((product) =>
            product.id === id
              ? { ...product, amount: product.amount + 1 }
              : product,
          )
        }
      })
    }
    setCatalogProducts((prevStateCatalogProducts) =>
      prevStateCatalogProducts.map((product) =>
        product.id === id ? { ...product, variant: 'secondary' } : product,
      ),
    )
  }

  function removeItemFromShoppingCart(id: number) {
    const newArrayOfShoppingCart = selectedProducts.filter(
      (product) => product.id !== id,
    )
    setSelectedProducts(newArrayOfShoppingCart)
  }

  return (
    <ProductsContext.Provider
      value={{
        catalogProducts,
        onAddProduct,
        onMinusProduct,
        setCatalogProducts,
        addProductToShoppingCart,
        selectedProducts,
        onAddSelectedProducts,
        onMinusSelectedProducts,
        successPurchaseOrder,
        setSuccessPurchaseOrder,
        paymentForm,
        setPaymentForm,
        removeItemFromShoppingCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
