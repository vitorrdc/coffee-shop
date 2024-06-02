import styled from 'styled-components'

interface ShoppingCartButtonProps {
  variant: 'primary' | 'secondary'
}

export const ProductCard = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;

  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
    padding-bottom: 0.75rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const Characteristics = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: ${(props) => props.theme.fonts['Roboto-Tag']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
`

export const CoffeeTitle = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors['base-subtitle']};

  padding-bottom: 0.5rem;
`

export const ProductDescription = styled.div`
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  text-align: center;

  margin-bottom: 2rem;
`

export const FooterProductCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PriceContent = styled.div`
  display: flex;

  align-items: center;
  gap: 0.25rem;
  margin-right: 1.43rem;
`
export const Price = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors['base-title']};
`

const buttonVariants = {
  primary: '#8047F8',
  secondary: '#4B2995',
}

export const ButtonShoppingCartIconNormal = styled.button<ShoppingCartButtonProps>`
  background-color: ${(props) => props.theme.colors['purple-normal']};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  margin-left: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    transition: 0.2s;
  }

  ${(props) => {
    return `background-color:${buttonVariants[props.variant]}`
  }}
`
