import { AuraContainer, Section } from "./Aura.styled";

function Aura() {
    return (
        <AuraContainer>
            <Section id="up"></Section>
            <Section id="down"></Section>
            <Section id="left"></Section>
            <Section id="right"></Section>
        </AuraContainer>
    )
}

export default Aura;