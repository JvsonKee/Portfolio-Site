import styled from "styled-components";

export const ContactGreeting = styled.div`
    margin-bottom: 20px;
`

export const EmailLink = styled.a`
    font-size: 30px;
    color: var(--black);
    text-decoration: none;
    transition: 300ms ease-in-out;
    font-weight: 300;

    &:hover {
        color: blue;
    }
`

export const SocialsContainer = styled.div`
    display: flex;
    gap: 200px;
    margin-bottom: 20px;

    a {
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;
        color: var(--black);
        transition: 300ms ease-in-out;

        &:hover {
            color: blue;
        }
    }
`