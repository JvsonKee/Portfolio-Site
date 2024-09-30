import styled from "styled-components";

const ExperienceCardContainer = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const ExperienceDate = styled.div`

    @media screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
`

const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
     
    div {
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

const ExperienceTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
`

const ExperiencePosition = styled.div`
`

const ExperienceDescription = styled.div`
    padding-top: 10px;
`

const ExperienceCard = ({data}) => {
    return (
        <ExperienceCardContainer>
            <ExperienceDate>{data.start} – {data.end}</ExperienceDate>
            <CardInformation>
                <ExperienceTitle>{data.title}</ExperienceTitle>
                <ExperiencePosition>{data.position}</ExperiencePosition>
                <ExperienceDescription>{data.description}</ExperienceDescription>
            </CardInformation>
        </ExperienceCardContainer>

    )
}

export default ExperienceCard;