import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 5vh;
    z-index: 1;
`

export const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

    div {
        cursor: pointer;
    }
`