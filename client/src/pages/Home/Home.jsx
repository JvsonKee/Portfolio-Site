import Aura from "../../components/Aura/Aura";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PageIntro from "../../components/PageIntro/PageIntro";
import { ContentContainer, PageContainer, ContentWrapper } from "../../styles/Containers";
import { AboutContainer, AboutDescription, AboutHeader, Icon, Left, ResumeContainer, ResumeLink, Right } from "./Home.styled";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
 
function About() {
    return (
        <PageContainer>
            <Aura />
            <ContentContainer>
            <NavBar />
                <ContentWrapper>
                    <PageIntro bigString={"Hi! I'm Matthias." + " A Developer."} smallString={"I'm passionate about crafting elegant web applications and beautiful experiences."}/>
                    <AboutContainer>
                        <Left>

                        </Left>
                        <Right>
                            <AboutHeader>About me</AboutHeader>
                            <AboutDescription>
                                I am currently in my fourth year of Computer Science studying at the University of Calgary. Over my studies I have dedicated myself to both personal and collaborative projects and have been honing my skills and developing a strong foundation in programming. 
                                <br /><br />
                                I am eager to translate my theoretical knowledge into real-world solutions. My experiences have equipped me with a robust foundation in programming languages, algorithms, and software development methodologies, empowering me to tackle complex problems with confidence and creativity. My goal is to leverage my skills to create innovative solutions that positively impact the world around us. 
                            </AboutDescription>
                            <br /> 
                            <ResumeLink href="">
                                <ResumeContainer>
                                    <span>Resume</span> 
                                    <Icon icon={faArrowUpRightFromSquare} className="arrow"/>
                                </ResumeContainer>
                            </ResumeLink>
                        </Right>
                    </AboutContainer>
                </ContentWrapper>
                <Footer />
            </ContentContainer>
        </PageContainer>
    )
}

export default About