import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1700px) {
    font-size: 75%;
    }
}




body {
   
    background: linear-gradient(to right, #606c88, #3f4c6b);
    font-family: 'inter', sans-serif;
    overflow-x: hidden;
}

p {
        padding: 3rem 0rem;
        color: #77d0d8;
        font-size: 1.4rem;
        line-height: 150%;
        font-family: 'Lato', sans-serif;
  

    }
    
    h1,h2,h3,h4 {
        color: #77d0d8;
        font-family: 'Lato', cursive;
    }


`;

export default GlobalStyle;
