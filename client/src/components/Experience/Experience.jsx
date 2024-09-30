import { forwardRef } from "react";
import { SectionContainer, SectionContentContainer, SectionWrapper } from "../../styles/Containers";
import Header from "../Header";
import ExperienceCard from "./ExperienceCard";

const Experience = forwardRef((props, ref) => {
    const experiences = [
        {
            title: "Enlighten Media",
            position: "Full-Stack Developer",
            description: "Designing, developing and maintaining company website. Enhancing brand visibility and user experience.",
            start: "2024",
            end: "Present"
        }

    ]

    return (
        <SectionContainer ref={ref}>
            <SectionWrapper>
                <Header first="Exper–" second="ience"/>
                <SectionContentContainer>
                    {
                        experiences.map((experience, i) => (
                            <ExperienceCard data={experience} key={i}/>
                        ))
                    }
                </SectionContentContainer>
            </SectionWrapper>
        </SectionContainer>
    )
})

export default Experience;