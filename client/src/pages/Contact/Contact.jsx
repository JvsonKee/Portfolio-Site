import PageIntro from "../../components/PageIntro/PageIntro"
import { ContentWrapper } from "../../styles/Containers"
import { Email, EmailContainer, Icon, Link, Platforms } from "./Contact.styled"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Contact() {
    return (
        <ContentWrapper>
            <PageIntro bigString={"Contact Me."} smallString={"Feel free to leave me a message — I'm always eager to connect and explore potential opportunities!"}/>
            <Link href="mailto: matthias.kee@outlook.com">
                <EmailContainer>
                    <Email>matthias.kee@outlook.com</Email>
                </EmailContainer>
            </Link>
            <Platforms>
                <Link href="https://github.com/JvsonKee" target="_blank">
                    <Icon icon={faGithubSquare} />
                </Link>
                <Link href="https://www.linkedin.com/in/matthias-kee-90548a286/" target="_blank">
                    <Icon icon={faLinkedin} />
                </Link>
            </Platforms>
        </ContentWrapper>
    )
}

export default Contact