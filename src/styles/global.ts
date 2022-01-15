import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --pink: #f55376;
        --dark-green: #008F17;

        --green-light:#27C044;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #fff;

        --input-background: #e7e9ee;
        --input-border: #d7d7d7;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        width: 100%;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        rigth: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        position: relative;
        padding: 3rem;
        border-radius: 0.24rem;
        
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);

        }
    }
`