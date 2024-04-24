import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    height: 430px;
    border-radius: 50px;
    background-color: #274A3C;
    border: 1px solid rgba(206, 255, 232, 0.25);
    transition: 0.3s ease-in-out;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;    
        border: 1.5px solid rgba(206, 255, 232, 0.25);
        border-width: 3px;
    }
`

export const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3%;
    width: 85%;
    height: 90%;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardLabel = styled.h2`
    font-size: 30px;
    color: var(--teal);
    font-weight: 100;
`

export const CardDescription = styled.div`
    color: var(--white);
    font-family: var(--sora-font);
    font-size: 16px;
    line-height: 23px;
`

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const TagHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--tag);
    border-radius: 100px;
    width: fit-content;
    padding: 7px 10px;
    font-family: var(--sora-font);
    color: var(--white);
    font-size: 12px;
`

export const Image = styled.img`
    border-radius: 20px;
    object-fit: cover;
`