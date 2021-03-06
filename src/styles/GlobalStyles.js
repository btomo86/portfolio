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
    background: linear-gradient(to right, #43cea2, #185a9d);
    font-family: 'inter', sans-serif;
    overflow-x: hidden;
}


`;

export default GlobalStyle;
