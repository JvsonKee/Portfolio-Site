import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    min-height: 80vh;
`

export const SectionWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 50px;
    }
`

export const SectionContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 55%;

    div {
        font-size: 16px;
        line-height: 1.6;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`