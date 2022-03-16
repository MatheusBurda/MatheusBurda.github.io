import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{

        --purple: #6408b6;
        --orange: #E25757;
        --blue: #3F5EFB;
        --text-color: #fff;

        --gradient: linear-gradient(90deg, rgba(226,87,87,1) 0%, rgba(63,94,251,1) 120%);
        --background: #1a1a1a;
        --background-light: #333333;

    }

    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text-color);
    }
    
    body{
        background: var(--background);
        width: 100%;
        height: 100%;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    h1, h2, h3 {
        background: var(--gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    a {
        text-decoration: none;
        color: var(--text-color);
    }

    button {
        cursor: pointer;
        background: var(--background);
    }

    /* Credits to this tutorial --> https://www.youtube.com/watch?v=Kz96odltLQI */
    .underline-hover-effect {
        display: inline-block;
        padding-bottom: 0.25rem; 
        position: relative;
        
        &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50%;
            height: 2px;
            background-image: var(--gradient);
            transition: width 0.25s ease-out;
        }
        
        &:hover::before {
            width: 100%;
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;