import { useState } from "react";
import { NavContainer, NavItem, NavWrapper } from "./NavBar.styled"

function NavBar() {
    const [scrollStyle, setScrollStyle] = useState("none");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
            setScrollStyle("scroll");
        }
        if (window.scrollY < 20) {
            setScrollStyle("none");
        }
    });

    return (
        <NavContainer>
            <NavWrapper className={scrollStyle}>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar