import { useState } from "react";
import { NavContainer, NavItem, NavWrapper } from "./NavBar.styled";

function NavBar( {sendToParent} ) {
    const [scrollStyle, setScrollStyle] = useState("none");
    const [current, setCurrent] = useState("about");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
            setScrollStyle("scroll");
        }
        if (window.scrollY < 20) {
            setScrollStyle("none");
        }
    });

    function onClick(page) {
        sendToParent(page);
        setCurrent(page);
    }

    return (
        <NavContainer>
            <NavWrapper className={scrollStyle}>
                <NavItem onClick={() => onClick("about")} className={current === "about" ? "current" : null} >Home</NavItem>
                <NavItem onClick={() => onClick("projects")} className={current === "projects" ? "current" : null}>Projects</NavItem>
                <NavItem onClick={() => onClick("contact")} className={current === "contact" ? "current" : null}>Contact</NavItem>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar