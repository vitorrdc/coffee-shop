import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 2rem 0;
`

export const TitleOfContainer = styled.div`
  font-family: 'baloo 2', sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-weight: 700;
`

export const GridProductsContainer = styled.div`
  padding-top: 3.375rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 2.5rem;
`
