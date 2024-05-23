import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  img {
    height: 2.5rem;
  }
`

export const LocaleAndCartShoppingContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const ShoppingCartButton = styled.button`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 8px;
  padding: 0.5rem;
  position: relative;
`
export const Badge = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  font-weight: 700;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`

export const Locale = styled.div`
  background-color: ${(props) => props.theme.colors['purple-light']};
  border-radius: 8px;
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};

  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
`
