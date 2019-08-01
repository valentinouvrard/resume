import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  };

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
    font-weight: inherit;
  }

  a {
    color: ${props => props.theme.palette.primary};
    text-decoration: none;
    transition: all 0.15s;
  }
`
export default GlobalStyle;