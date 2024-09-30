import { forwardRef } from "react";
import { NavBarContainer, NavItems } from "./NavBar.styled";

const NavBar = forwardRef((props, ref) => {  

    const scrollToSection = (elementRef) => {
        console.log("hello")
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    
    console.log({ref})

    return (
        <NavBarContainer>
            <NavItems>
                <div onClick={() => scrollToSection(ref[0])}>About</div>
                <div onClick={() => scrollToSection(ref[1])}>Experience</div>
                <div onClick={() => scrollToSection(ref[2])}>Projects</div>
                <div onClick={() => scrollToSection(ref[3])}>Contact</div>
            </NavItems>
        </NavBarContainer>
    )
})

export default NavBar;