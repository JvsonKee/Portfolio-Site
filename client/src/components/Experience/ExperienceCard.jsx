import styled from "styled-components";

const ExperienceCardContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const ExperienceDate = styled.div`
    font-size: 20px;

    @media screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
`

const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
     
    div {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

const ExperienceTitle = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: var(--black);
`

const ExperiencePosition = styled.div`
    font-style: italic;
`

const ExperienceDescription = styled.div`
    padding-top: 10px;
`

const ExperienceCard = ({data}) => {
    return (
        <ExperienceCardContainer>
            <ExperienceDate>{data.start} – {data.end}</ExperienceDate>
            <CardInformation>
                <ExperienceTitle href="https://enlighten-media.com" target="_blank">{data.title}</ExperienceTitle>
                <ExperiencePosition>{data.position}</ExperiencePosition>
                <ExperienceDescription>{data.description}</ExperienceDescription>
            </CardInformation>
        </ExperienceCardContainer>

    )
}

export default ExperienceCard;