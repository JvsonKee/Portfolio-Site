import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    margin-bottom: 50px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
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
`  

export const Right = styled.div`
    display: flex;
    align-items: flex-end;
    width: 30%;

    div {
        font-family: var(--absans-font);
        color: var(--teal);
    }
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--white);
    font-family: var(--sora-font);
    font-size: 20px;
`

