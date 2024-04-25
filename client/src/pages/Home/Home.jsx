import PageIntro from "../../components/PageIntro/PageIntro";
import { ContentWrapper } from "../../styles/Containers";
import { AboutContainer, AboutDescription, AboutHeader, Icon, ImageContainer, Left, ProfilePicture, ResumeContainer, ResumeLink, Right } from "./Home.styled";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../assets/images/jason.png';
import resume from '../../assets/matthiaskee_resume.pdf';

function About() {
    return (
        <ContentWrapper>
            <PageIntro bigString={"Hi! I'm Matthias."} smallString={"I'm passionate about crafting elegant web applications and beautiful experiences."}/>
            <AboutContainer>
                <Left>
                    <ImageContainer>
                        <ProfilePicture src={profileImg}/>
                    </ImageContainer>
                </Left>
                <Right>
                    <AboutHeader>About me</AboutHeader>
                    <AboutDescription>
                        I am currently in my fourth year of Computer Science studying at the University of Calgary. Over my studies I have dedicated myself to both personal and collaborative projects and have been honing my skills and developing a strong foundation in programming. 
                        <br /><br />
                        I am eager to translate my theoretical knowledge into real-world solutions. My experiences have equipped me with a robust foundation in programming languages, algorithms, and software development methodologies, empowering me to tackle complex problems with confidence and creativity. My goal is to leverage my skills to create innovative solutions that positively impact the world around us. 
                    </AboutDescription>
                    <br /> 
                    <ResumeLink href={resume} target="blank">
                        <ResumeContainer>
                            <span>Résumé</span> 
                            <Icon icon={faArrowUpRightFromSquare} className="arrow"/>
                        </ResumeContainer>
                    </ResumeLink>
                </Right>
            </AboutContainer>
        </ContentWrapper>

    )
}

export default About