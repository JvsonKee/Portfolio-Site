import { forwardRef, useState } from "react";
import { NavBarContainer, NavItems } from "./NavBar.styled";

const NavBar = forwardRef((props, ref) => {  

    const [active, setActive] = useState("Home")

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <NavBarContainer>
            <NavItems>
                <div onClick={() => scrollToSection(ref[0])}>Home</div>
                <div onClick={() => scrollToSection(ref[1])}>About</div>
                <div onClick={() => scrollToSection(ref[2])}>Experience</div>
                <div onClick={() => scrollToSection(ref[3])}>Projects</div>
                <div onClick={() => scrollToSection(ref[4])}>Contact</div>
            </NavItems>
        </NavBarContainer>
    )
})

export default NavBar;