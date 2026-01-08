import { forwardRef } from "react";
import {
  SectionContainer,
  SectionContentContainer,
  SectionWrapper,
} from "../../styles/Containers";
import Header from "../Header";
import ExperienceCard from "./ExperienceCard";
import YSlide from "../../Animations/YSlide";

const experiences = [
  {
    title: "AME Consulting Ltd.",
    position: "Software Developer",
    description:
      "Developing and maintaining the company’s timesheet system, ensuring accurate time tracking, reliability, and ease of use.",
    start: "May 2025",
    end: "Present",
  },
  {
    title: "Enlighten Media",
    position: "Full-Stack Developer",
    description:
      "Designing, developing and maintaining company website. Enhancing brand visibility and user experience.",
    start: "January 2024",
    end: "April 2025",
  },
];

const Experience = forwardRef((props, ref) => {
  return (
    <SectionContainer ref={ref}>
      <YSlide>
        <SectionWrapper>
          <Header first="Exper–" second="ience" />
          <SectionContentContainer>
            {experiences.map((experience, i) => (
              <ExperienceCard data={experience} key={i} />
            ))}
          </SectionContentContainer>
        </SectionWrapper>
      </YSlide>
    </SectionContainer>
  );
});

export default Experience;

