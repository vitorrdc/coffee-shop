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

export interface ProductsType {
  id: string
  image: string
  characteristics: string
  secondCharacteristics?: string
  thirdCharacteristics?: string
  name: string
  description: string
  price: number
}

interface CatalogProductsContextType {
  catalogProducts: ProductsType[]
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
      id: '1',
      image: TraditionalExpresso,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: '2',
      image: AmericanExpress,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: '3',
      image: Creamy,
      characteristics: 'TRADICIONAL',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: '4',
      image: IceCream,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'GELADO',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: '5',
      image: CoffeWMilt,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: '6',
      image: Latte,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: '7',
      image: Capuccino,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: '8',
      image: Macchiato,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: '9',
      image: Mocaccino,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: '10',
      image: HotChoccolate,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'COM LEITE',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: '11',
      image: Cuban,
      characteristics: 'TRADICIONAL',
      secondCharacteristics: 'ALCOÓLICO',
      thirdCharacteristics: 'GELADO',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: '12',
      image: Hawaiian,
      characteristics: 'ESPECIAL',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: '13',
      image: Arabic,
      characteristics: 'ESPECIAL',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: '14',
      image: Irish,
      characteristics: 'ESPECIAL',
      secondCharacteristics: 'ALCOÓLICO',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ])

  return (
    <ProductsContext.Provider value={{ catalogProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
