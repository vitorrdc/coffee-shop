import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding:0 ;
  box-sizing: border-box;
}

input {
  outline:0;
  background-color: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']} ;

  &:focus {
  outline: 1px solid ${(props) => props.theme.colors['yellow-dark']} ;
}

}



body {
  background-color: ${(props) => props.theme.colors.background} ;
  -webkit-font-smoothing: antialiased;
}

button {
  outline:0 ;
  border: none;
  cursor: pointer;
}

input, body {
  font-family:'Roboto', sans-serif;
  border: none;
}

`
