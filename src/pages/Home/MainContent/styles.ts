import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.875rem 0;
`

export const HomeSlogan = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors['base-title']};
`

export const HomeSubSlogan = styled.div`
  font-size: ${(props) => props.theme.fonts['Roboto-Text-L']};
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const TopcsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const LeftIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 4.125rem;
`

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const ShoppingCartIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const TimerIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-normal']};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 4.125rem;
`

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const BoxIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-label']};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: ${(props) => props.theme.fonts['Roboto-Text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const CoffeeIconContainer = styled.div`
  background-color: ${(props) => props.theme.colors['purple-normal']};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
