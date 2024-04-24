import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutContainer = styled.div`
    display: flex;
    width: 90%;
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`
export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 80%;
    padding: 3px;
    border-radius: 100px 100px 0 0;
    /* background-color: var(--purple); */
    background-color: #FF975D;
`
export const ProfilePicture = styled.img`
    border-radius: 97px 97px 0 0;
    width: 98%;
    height: 98%;
    object-fit: cover;
`

export const Right = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 17px;
    width: 50%;
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
