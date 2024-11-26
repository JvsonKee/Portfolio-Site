import HomeIntro from "../components/HomeIntro/HomeIntro";
import About from "../components/About/About";
import { PageContainer } from "../styles/Containers";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";
import { useRef } from "react";

const Webpage = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const refs = [
        homeRef, aboutRef, experienceRef, projectsRef, contactRef
    ]

    return (
        <PageContainer>
            <NavBar ref={refs} />
            <HomeIntro ref={homeRef}/>
            <About ref={aboutRef}/>
            <Experience ref={experienceRef} />
            <Projects ref={projectsRef}/>
            <Contact ref={contactRef}/>
        </PageContainer>
    )
}

export default Webpage;
