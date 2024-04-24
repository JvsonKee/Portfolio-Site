import styled from "styled-components";
import { ContentWrapper } from "../../styles/Containers";

export const ProjectsWrapper = styled(ContentWrapper)`
    margin: 200px 0 100px 0;
    gap: 130px;
`

export const ProjectsCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
`

export const Link = styled.a`
    text-decoration: none;
`
