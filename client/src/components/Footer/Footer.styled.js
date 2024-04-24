import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    margin-bottom: 50px;

    @media screen and (max-width: 860px) {
        justify-content: space-evenly;
        height: 50px;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
        height: 100px;
        margin-bottom: 20px;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media screen and (max-width: 860px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 10px;
    }

    @media screen and (max-width: 700px) {
        flex-direction: row;
        width: 100%;
        gap: 10px;

        h2 {
            font-size: 14px;
        }
    }

`

export const FooterName = styled.h2`
    color: var(--teal);
`

export const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const Link = styled.a`
    color: var(--white);
    text-decoration: none;
    font-family: var(--sora-font);
    font-style: italic;
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--teal);
    }
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;

    @media screen and (max-width: 700px) {
        font-size: 25px;
    }
`  

export const Right = styled.div`
    display: flex;
    align-items: flex-end;
    width: 50%;

    div {
        font-family: var(--absans-font);
        color: var(--teal);
    }

    @media screen and (max-width: 860px) {
        width: auto;
        font-size: 20px;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--white);
    font-family: var(--sora-font);
    font-size: 20px;

    @media screen and (max-width: 700px) {
        font-size: 14px;
    }
`

