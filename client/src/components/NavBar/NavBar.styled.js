import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100px;

    & a.active {
        color: var(--teal);
    }

    .scroll {
        border-radius: 50px;
        background-color: rgba(58, 83, 72, 0.8);
        transition:0.3s ease-in-out;
        backdrop-filter: blur(5px);
    }

    .none {
        transition: 0.3s ease-in-out;
    }
`

export const NavWrapper = styled.div`
    display: flex;

    .current {
        color: var(--teal);
    }
`

export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: 140px;
    height: 44px;
    font-size: 18px;
    font-family: var(--sora-font);
    color: var(--white);
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: var(--teal);
    }
`