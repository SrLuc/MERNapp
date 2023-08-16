import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
    }

`;
