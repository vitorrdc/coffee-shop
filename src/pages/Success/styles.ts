import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`

export const ConfirmedPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const HeroContent = styled.div`
  div {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 2rem;
  }

  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-L']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const DeliveryResumeContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DescriptionDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocaleIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['purple-normal']};
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Description = styled.div`
  font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
  color: ${(props) => props.theme.colors['base-text']};

  span {
    font-weight: 700;
  }
`

export const TimeIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-normal']};
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ValueIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;

  img {
    width: 30.75rem;
  }
`
