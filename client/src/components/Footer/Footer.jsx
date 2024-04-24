import { ContactContainer, FooterContainer, FooterName, Icon, Left, Link, LogoContainer, Right } from "./Footer.styled";
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <FooterContainer>
            <Left>
                <FooterName>Matthias Kee</FooterName>
                <LogoContainer>
                    <Link href="https://github.com/JvsonKee" target="blank">
                        <Icon icon={faSquareGithub}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/matthias-kee-90548a286/" target="blank">
                        <Icon icon={faLinkedin}/>
                    </Link>
                </LogoContainer>
            </Left>
            <Right>
                <ContactContainer>
                    <div>Contact me:</div>
                    <Link href="mailto: matthias.kee@outlook.com">matthias.kee@outlook.com</Link>
                </ContactContainer>
            </Right>
        </FooterContainer>
    )
}

export default Footer;