import Header from "../Header";
import {
  ProjectsContainer,
  ProjectsList,
  ProjectsWrapper,
} from "./Projects.styled";

import rchome from "../../assets/images/rc-home.png";
import rcgraph from "../../assets/images/rc-graph.png";
import spotDesk from "../../assets/images/spot-desk-mu.png";
import spotMob from "../../assets/images/spot-mob-mu.png";
import scraperCode from "../../assets/images/scraper-code.png";
import scraperCSV from "../../assets/images/scraper-csv.png";
import dime from "../../assets/images/dime-mu.png";

import Project from "./Project";
import { forwardRef } from "react";
import YSlide from "../../Animations/YSlide";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Resident Connections",
      description:
        "Explore the Southern Resident Killer Whales, through an interactive network graph.",
      link: "https://residentconnections.xyz",
      linkName: "Resident Connections",
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      images: [rchome, rcgraph],
      type: 1,
    },
    {
      title: "TuneTeller",
      description:
        "A comprehensive web application leveraging the Spotify API, delivering personal insights into listening patterns and preferences.",
      link: "https://github.com/JvsonKee/Spotify-Project",
      linkName: "TuneTeller",
      technologies: ["Node.js", "React", "Express", "Spotify API"],
      images: [spotDesk, spotMob],
      type: 0,
    },
    {
      title: "Calgary Real Estate Web Scraper",
      description:
        "A dynamic real estate web scraper focused on aggregating property listings across the city of Calgary.",
      link: "https://github.com/JvsonKee/calgary-real-estate-scraper",
      linkName: "Calgary Real Estate Web Scraper",
      technologies: ["Python", "Selenium", "Pandas"],
      images: [scraperCode, scraperCSV],
      type: 1,
    },
    {
      title: "Dime",
      description:
        "An intuitive financial management application designed to simplify money management and empower users to track expenses, set budgets, and achieve financial goals effortlessly.",
      link: "https://github.com/JvsonKee/Dime-CPSC471",
      linkName: "Dime",
      technologies: ["Node.js", "React", "Express", "MySQL"],
      images: [dime],
      type: 2,
    },
  ];

  return (
    <ProjectsContainer ref={ref}>
      <YSlide>
        <ProjectsWrapper>
          <YSlide>
            <Header first="Pro–" second="jects" colour="#ffffff" />
          </YSlide>
          <ProjectsList>
            {projects.map((project, i) => (
              <Project data={project} key={i} />
            ))}
          </ProjectsList>
        </ProjectsWrapper>
      </YSlide>
    </ProjectsContainer>
  );
});

export default Projects;
