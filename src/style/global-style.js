import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    display: block;
    margin: 0.5cm auto;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    width: 210mm;
    height: 296mm;
  };

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
    font-weight: inherit;
  }

  p {
    font-size: 12px;
  }


  a {
    color: ${props => props.theme.palette.primary};
    text-decoration: none;
    transition: all 0.15s;
    font-size: 12px;
  }

  @media print {
    body, page[size="A4"] {
      margin: 0;
      box-shadow: 0 0 0 0;
    }
  };
`
export default GlobalStyle;