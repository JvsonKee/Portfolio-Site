import styled from "styled-components";

const ImageHolder = styled.div`
    display: flex;
    gap: 100px;

    @media screen and (max-width: 800px) {
        gap: 50px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }   
`

const DeskWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    width: 100%;
    height: 600px;

    @media screen and (max-width: 800px) {
        height: 500px;
    }

    @media screen and (max-width: 600px) {
        position: relative;
        top: 0;
        left: 0;
        height: 340px;
    }

`

const MobWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
    width: 30%;
    height: 600px;

    @media screen and (max-width: 800px) {
        height: 500px;
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        right: 17px;
        margin-top: 70px;
        height: 290px;
    }
`

const DeskImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const MobImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const SideBySide = ({images}) => {
    return (
        <ImageHolder>
            <DeskWrapper>
                <DeskImage src={images[0]}/>
            </DeskWrapper>
            <MobWrapper>
                <MobImage src={images[1]}/>
            </MobWrapper>
        </ImageHolder>
    )
}

export default SideBySide;