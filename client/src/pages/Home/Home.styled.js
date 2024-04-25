import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutContainer = styled.div`
    display: flex;
    width: 90%;

    @media screen and (max-width: 860px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 450px;
        gap: 15px;
    }

    @media screen and (max-width: 700px) {
        height: 550px;
    }
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;

    @media screen and (max-width: 860px) {
        width: 100%;
        height: 40%;
    }

    @media screen and (max-width: 600px) {
        height: 25%;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    height: 98%;
    padding: 3px;
    border-radius: 100px 100px 0 0;
    background-color: #FF975D;

    @media screen and (max-width: 1200px) {
        width: 75%;
    }

    @media screen and (max-width: 860px) {
        width: 100%;
        border-radius: 0px;

        img {
            border-radius: 0px;
        }
    }
`
export const ProfilePicture = styled.img`
    border-radius: 97px 97px 0 0;
    width: 98%;
    height: 98%;
    object-fit: cover;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    font-size: 17px;
    width: 60%;
    height: 100%;

    @media screen and (max-width: 860px) {
        justify-content: flex-start;
        font-size: 14px;
        width: 100%;
        height: 60%;

        div {
            line-height: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        height: 75%;
    }
`

export const AboutHeader = styled.h1`
    color: var(--teal);
`

export const AboutDescription = styled.div`
    font-family: var(--sora-font);
    color: var(--white);
    line-height: 25px;
`

export const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 200px;
`

export const ResumeLink = styled.a`
    color: var(--white);
    font-family: var(--sora-font);
    text-decoration: none;

    &:hover {
        color: var(--teal);
        
        .arrow {
            transform: translateX(2px) translateY(-2px)
        }
    }
`

export const Icon = styled(FontAwesomeIcon)`
    font-weight: 100;
    font-size: 14px;
    transition: 0.3s;
`
