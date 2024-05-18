import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.WHITE_300};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', sans-serif;
        outline: none;
        font-size: 1.6rem;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: .8rem;
        height: .9.6rem; 
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: .8rem; /* Bordas arredondadas */
    }

    ::-webkit-scrollbar-button {
        display: none;
    }

`