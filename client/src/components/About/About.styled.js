import styled from "styled-components";

export const ResumeLink = styled.a`
    display: flex;
    gap: 10px;
    width: fit-content;
    color: var(--black);
    text-decoration: none;
    font-weight: 400;
    transition: 300ms ease-in-out;

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        color: var(--dark-grey);
    }
`