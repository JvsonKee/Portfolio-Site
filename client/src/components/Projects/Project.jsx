import SideBySide from "../ImageLayouts/SideBySide";
import Single from "../ImageLayouts/Single";
import Stacked from "../ImageLayouts/Stacked";
import { ProjectContainer, ProjectDescription, ProjectExtrasWrapper, ProjectInformationBottom, ProjectInformationTop, ProjectLink, ProjectTitle, TechnologiesContainer, TechnologiesHeader, TechnologiesList } from "./Project.styled";
import { FaLink } from "react-icons/fa6";

const Project = ({data}) => {
    return (
        <ProjectContainer>
            <ProjectInformationTop>
                <ProjectTitle>{data.title}</ProjectTitle>
                <ProjectDescription>{data.description}</ProjectDescription>
                <ProjectExtrasWrapper>
                    <TechnologiesContainer>
                        <TechnologiesHeader>Technologies</TechnologiesHeader>
                        <TechnologiesList>
                            {
                                data.technologies.map((tech, i) => (
                                    <div key={i}>{tech}</div>
                                ))
                            }
                        </TechnologiesList>
                    </TechnologiesContainer>
                    <ProjectLink href={data.link} target="_blank"><span><FaLink /></span>{data.linkName}</ProjectLink>
                </ProjectExtrasWrapper>
            </ProjectInformationTop>
            <ProjectInformationBottom>
                {
                    data.type === 0 ? <SideBySide images={data.images}/> :
                    data.type === 1 ? <Stacked images={data.images} /> : 
                    data.type === 2 ? <Single images={data.images} /> :
                    null
                }
            </ProjectInformationBottom>
        </ProjectContainer>
    )
}

export default Project;