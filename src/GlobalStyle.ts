import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  * {
    
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif;  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;;
  }
  body {  
    background: #000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #333;
    color: #eee;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;