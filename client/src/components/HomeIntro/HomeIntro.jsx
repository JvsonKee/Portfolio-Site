import { forwardRef } from "react";
import YSlide from "../../Animations/YSlide";
import { InfoLine, IntroContainer, IntroHeader, IntroInformationWrapper, JobTitle, ScrollLine, ScrollWrapper } from "./HomeIntro.styled";

const HomeIntro = forwardRef((props, ref) => {
    return (
        <IntroContainer ref={ref}>
            <YSlide>
                <IntroHeader>
                    <div>Matth–</div>
                    <div className="pad">ias</div>
                    <div>Kee</div>
                </IntroHeader>
            </YSlide>
            <YSlide>
                <IntroInformationWrapper>
                    <JobTitle>Full-Stack Developer</JobTitle>
                    <InfoLine>Passionate about crafting elegant web applications and beautiful experiences.</InfoLine>
                </IntroInformationWrapper>
            </YSlide>
            <YSlide>
                <ScrollWrapper>
                    <ScrollLine>Scroll down</ScrollLine>
                    <ScrollLine>Portfolio</ScrollLine>
                </ScrollWrapper>
            </YSlide>
        </IntroContainer>
    )
})

export default HomeIntro;