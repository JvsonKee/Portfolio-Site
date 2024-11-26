import { forwardRef } from "react";
import { SectionContainer, SectionContentContainer, SectionWrapper } from "../../styles/Containers";
import Header from "../Header";
import { ContactGreeting, EmailLink, SocialsContainer } from "./Contact.styled";
import ContactForm from "./ContactForm";
import YSlide from "../../Animations/YSlide";

const Contact = forwardRef((props, ref) => {
    return (
        <SectionContainer ref={ref}>
            <YSlide>
                <SectionWrapper>
                    <Header first="Con–" second="tact"/>
                    <SectionContentContainer>
                        <ContactGreeting style={{fontSize: "24px"}}>Feel free to reach out for collaborations, opportunities, or just to say hello! Let's build something amazing together.</ContactGreeting>
                        <EmailLink href="mailto:matthias.kee@outlook.com">matthias.kee@outlook.com</EmailLink>
                        <SocialsContainer>
                            <a href="https://www.linkedin.com/in/matthias-kee" target="_blank">LinkedIn</a>
                            <a href="https://www.github.com/JvsonKee" target="_blank">GitHub</a>
                        </SocialsContainer>
                        <ContactForm />
                    </SectionContentContainer>
                </SectionWrapper>
            </YSlide>
        </SectionContainer>
    )
})

export default Contact;