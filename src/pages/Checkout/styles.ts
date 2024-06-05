import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const Subtitle = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin-bottom: 1rem;
`

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 40rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    }
  }
`
export const DescriptionOfLabel = styled.span`
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  color: ${(props) => props.theme.colors['base-text']};
  margin-left: 1.9rem;
  margin-bottom: 2rem;
`

export const InputArea = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
`

export const CEPNumberAndNeighborhoodInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  padding: 0.75rem;
  border-radius: 8px;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  }

  &.error {
    border: 1px solid red;
  }
`
export const AdressInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  padding: 0.75rem;
  border-radius: 8px;
  width: 40rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  }

  &.error {
    border: 1px solid red;
  }
`
export const ComplementInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  padding: 0.75rem;
  border-radius: 8px;
  width: 21.75rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  }

  &.error {
    border: 1px solid red;
  }
`

export const CityInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  padding: 0.75rem;
  border-radius: 8px;
  width: 17.25rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  }

  &.error {
    border: 1px solid red;
  }
`
export const UFInput = styled.input`
  background-color: ${(props) => props.theme.colors['base-input']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  padding: 0.75rem;
  border-radius: 8px;
  width: 4rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
  }

  &.error {
    border: 1px solid red;
  }
`

export const PaymentFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-top: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentOptionLabel = styled.label<{ checked: boolean }>`
  display: flex;
  width: 13rem;
  align-items: center;

  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors['base-button']};
  font-size: ${(props) => props.theme.fonts['Roboto-Button-M']};
  color: ${(props) => props.theme.colors['base-text']};
  border: 1px solid transparent;

  ${({ checked }) =>
    checked &&
    `
    border: 1px solid #8047F8;
  `}
  &:focus {
    outline: 1px solid ${(props) => props.theme.colors['purple-dark']};
  }
`

export const PaymentRadio = styled.input`
  display: none;
`

export const ErrorMessageStyle = styled.input`
  color: ${(props) => props.theme.colors['yellow-light']};
  font-size: ${(props) => props.theme.fonts['Roboto-Text-XS']};
`

export const SelectedsCoffees = styled.div`
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
`

export const WithoutSelectedProducts = styled.div`
  color: ${(props) => props.theme.colors['base-text']};
  text-align: center;
  padding-bottom: 2rem;
  font-weight: 700;
`

export const SubTotalLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  div {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-S']};
    color: ${(props) => props.theme.colors['base-text']};
  }
  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`
export const TotalLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  div {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-L']};
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 700;
  }
  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-L']};
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: 700;
  }
`

export const ButtonToConfirm = styled.button`
  background-color: ${(props) => props.theme.colors['yellow-normal']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts['Roboto-Button-G']};
  padding: 0.75rem;
  width: 26rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    transition: 0.2s;
  }
`
