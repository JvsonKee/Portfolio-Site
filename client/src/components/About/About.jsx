import Header from "../Header";
import { SectionContainer, SectionWrapper, SectionContentContainer } from "../../styles/Containers";
import resume from "../../assets/MatthiasKee-Resume.pdf";
import { ResumeLink } from "./About.styled";
import { FaLink } from "react-icons/fa6";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
    return (
        <SectionContainer ref={ref}>
            <SectionWrapper>
                <Header first="About" second="Me"/>
                <SectionContentContainer>
                    <div>I am currently in my fourth year of Computer Science studying at the University of Calgary. During my studies I have dedicated myself to both personal and collaborative projects and have been honing my skills and developing a strong foundation in programming.</div>
                    <div>I am currently working as a full-stack developer at Enlighten Media. Here, I am leveraging my front-end and back-end skills to create innovative solutions that enhance user experience and drive business growth. </div>
                    <ResumeLink href={resume} target="_blank">
                        <span>
                            <FaLink/>
                        </span>
                        <div>Résumé</div>
                    </ResumeLink>
                </SectionContentContainer>
            </SectionWrapper>
        </SectionContainer>
    )
})

export default About;