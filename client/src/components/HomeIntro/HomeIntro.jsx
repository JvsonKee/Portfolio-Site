import { InfoLine, IntroContainer, IntroHeader, IntroInformationWrapper, JobTitle, ScrollLine, ScrollWrapper } from "./HomeIntro.styled";

const HomeIntro = () => {
    return (
        <IntroContainer>
            <IntroHeader>
                <div>Matth–</div>
                <div className="pad">ias</div>
                <div>Kee</div>
            </IntroHeader>
            <IntroInformationWrapper>
                <JobTitle>Full-Stack Developer</JobTitle>
                <InfoLine>Passionate about crafting elegant web applications and beautiful experiences.</InfoLine>
            </IntroInformationWrapper>
            <ScrollWrapper>
                <ScrollLine>Scroll down</ScrollLine>
                <ScrollLine>Portfolio</ScrollLine>
            </ScrollWrapper>
        </IntroContainer>
    )
}

export default HomeIntro;