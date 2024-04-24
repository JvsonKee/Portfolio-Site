import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Absans';
        src: url('../assets/fonts/Absans-Regular.woff2');
    }
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400&display=swap');

    :root {
        --dark-green: #294136;
        --lime-green: #B7F0A3;
        --yellow: #FFD37D;
        --purple: #F0B5FF;
        --teal: #8EFFCA;
        --white: #CEFFE8;
        --tag: rgba(96, 163, 135, 0.74);
        --nav-active-bg: rgba(217, 217, 217, 0.2);
        --shadow: rgba(0, 0, 0, 0.35);

        --sora-font: 'Sora', sans-serif;
        --absans-font: 'Absans', sans-serif;
    }

    body {
        background-color: var(--dark-green);
        overflow-x: hidden;
    }

    h1, h2, h3 {
        font-family: var(--absans-font);
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-weight: 100;
    }
`

export default GlobalStyle