import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    color: white;
`

export const ProjectInformationTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProjectTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
`

export const ProjectDescription = styled.div`
    width: 40%;
    font-size: 16px;
    color: var(--grey);
    line-height: 1.5;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const ProjectExtrasWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 60%;
    padding-top: 10px;
    font-size: 14px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 30px;
    }
`

export const ProjectLink = styled.a`    
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    font-weight: 400;
    font-size: 16px;
    transition: 300ms ease-in-out;

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        color: var(--grey);
    }
`

export const TechnologiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TechnologiesHeader = styled.div`
    font-size: 16px;
`

export const TechnologiesList = styled.div`
    display: flex;
    gap: 10px;

    div {
        font-size: 14px;
    }
`

export const ProjectInformationBottom = styled.div`
    width: 100%;
`