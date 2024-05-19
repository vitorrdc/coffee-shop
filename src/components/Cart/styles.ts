import styled from 'styled-components'

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  gap: 3.125rem;

  div {
    display: flex;
    gap: 1.25rem;
  }
`
export const ProductImage = styled.img`
  width: 4rem;
  height: 4rem;
`
export const ContentOfCartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};

  button {
    background-color: ${(props) => props.theme.colors['base-button']};
    padding: 0.5rem;
    border-radius: 8px;

    display: flex;
    gap: 0.25rem;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme.colors['base-hover']};
      transition: 0.2s;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`
export const ItemPrice = styled.div`
  font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
  font-weight: 700;
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors['base-button']};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
