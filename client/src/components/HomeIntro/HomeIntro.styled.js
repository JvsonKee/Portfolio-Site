import styled from "styled-components";

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 80%;
    height: 95dvh;
`

export const IntroHeader = styled.div`
    display: flex;
    flex-direction: column;
    font-size: clamp(100px, 12vw, 160px);

    .pad {
        padding-left: clamp(20px, 12vw, 200px);
    }
`

export const IntroInformationWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 20px;
        margin-top: 5vh;
    }
`

export const JobTitle = styled.div`
    font-size: 26px;
    padding-left: clamp(0px, 1vw, 10px);
`

export const ScrollWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10vh;
`

export const InfoLine = styled.div`
    width: 30%;
    font-size: 16px;
    line-height: 1.6;

    @media screen and (max-width: 800px) {
        width: 100%;
        padding-left: clamp(2px, 1vw, 10px);
    }
`

export const ScrollLine = styled.div`
    width: 30%;
    font-size: 16px;
`