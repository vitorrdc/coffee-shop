import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 12px;
`

export const AddOrLessButton = styled.button`
  color: ${(props) => props.theme.colors['purple-normal']};
  background-color: ${(props) => props.theme.colors['base-button']};
  font-size: ${(props) => props.theme.fonts['Roboto-Button-G']};
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  outline: none;

  &:hover .minusIcon {
    fill: ${(props) => props.theme.colors['purple-dark']};
  }

  &:hover .plusIcon {
    fill: ${(props) => props.theme.colors['purple-dark']};
  }
`
