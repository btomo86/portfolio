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

/* html { font-size: calc(1em + 1vw) } */


body {
    /* background: linear-gradient(to right, #43cea2, #185a9d);*/
    background: linear-gradient(to right, #606c88, #3f4c6b);
    font-family: 'inter', sans-serif;
    overflow-x: hidden;
}

p {
        padding: 3rem 0rem;
        color: #77d0d8;
        font-size: 1.4rem;
        line-height: 150%;
  

    }


`;

export default GlobalStyle;
