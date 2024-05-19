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

  button {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 8px;
    padding: 0.5rem;
  }
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
