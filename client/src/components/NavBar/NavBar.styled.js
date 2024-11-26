import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 8vh;
    z-index: 1;
`

export const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

    div {
        cursor: pointer;
        font-size: 18px;
        transition: 300ms ease-in-out;

        &:hover {
            color: blue;
        }
    }

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }
`