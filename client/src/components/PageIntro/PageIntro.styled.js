import styled from "styled-components";

export const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 70%;
    gap: 30px;
`

export const IntroductionBig = styled.h1`
    font-size: 110px;
    font-family: var(--absans-font);
    font-weight: 100;
    color: var(--teal);
    line-height: 1;
`

export const IntroductionSmall = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 100;
    font-family: var(--sora-font);
    color: var(--white);
`