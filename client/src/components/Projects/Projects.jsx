import Header from "../Header";
import { ProjectsContainer, ProjectsList, ProjectsWrapper } from "./Projects.styled";
import spotDesk from "../../assets/images/spot-desk-mu.png";
import spotMob from "../../assets/images/spot-mob-mu.png";
import scraperCode from "../../assets/images/scraper-code.png";
import scraperCSV from "../../assets/images/scraper-csv.png";
import dime from "../../assets/images/dime-mu.png";

import Project from "./Project";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
    const projects = [
        {
            title: "Spotify Profile",
            description: "A comprehensive web application leveraging the Spotify API, delivering personal insights into listening patterns and preferences",
            link: "https://github.com/JvsonKee/Spotify-Project",
            linkName: "Spotify Profile",
            technologies: ["Node.js", "React", "Spotify API"],
            images: [spotDesk, spotMob],
            type: 0
        },
        {
            title: "Calgary Real Estate Web Scraper",
            description: "A dynamic real estate web scraper focused on aggregating property listings across the city of Calgary.",
            link: "https://github.com/JvsonKee/calgary-real-estate-scraper",
            linkName: "Calgary Real Estate Web Scraper",
            technologies: ["Python", "Selenium", "Pandas"],
            images: [scraperCode, scraperCSV],
            type: 1
        },
        {
            title: "Dime",
            description: "An intuitive financial management application designed to simplify money management and empower users to track expenses, set budgets, and achieve financial goals effortlessly.",
            link: "https://github.com/JvsonKee/Dime-CPSC471",
            linkName: "Dime",
            technologies: ["Node.js", "React", "MySQL"],
            images: [dime],
            type: 2
        }
    ]

    return (
        <ProjectsContainer ref={ref}>
            <ProjectsWrapper>
                <Header first="Pro–" second="jects" colour="#ffffff"/>
                <ProjectsList>
                    {
                        projects.map((project, i) => (
                            <Project data={project} key={i}/>
                        ))
                    }
                </ProjectsList>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
})

export default Projects;