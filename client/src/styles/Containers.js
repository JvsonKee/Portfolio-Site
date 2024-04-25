import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 2500px;
    min-height: 100vh;
    overflow-x: hidden;
    background-image: linear-gradient(80deg, var(--dark-green), var(--dark-green));
`

export const ContentContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 90%;

    @media screen and (max-width: 820px) {
        width: 95%;
    }
`

export const ContentWrapper = styled.div`
    display: flex;  
    align-items: center;
    flex-direction: column;
    gap: 80px;
    margin: 200px 0 100px 0;

    @media screen and (max-width: 820px) {
        margin: 130px 0 20px 0;
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`