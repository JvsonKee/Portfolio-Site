import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
    :root {
        --black: #252525;
        --dark-grey: #939393;
        --grey: #C7C7C7;
        
    }

    *, html {
        scroll-behavior: smooth !important;
    }

    body {
       font-family: Helvetica, sans-serif;
       color: var(--black);
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-weight: 100;
    }

    a {
        color: var(--black);
        font-weight: 400;
        text-decoration: none;
        transition: 300ms ease-in-out;

        &:hover {
            color: blue;
        }
    }
`

export default GlobalStyle