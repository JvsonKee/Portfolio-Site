import styled from "styled-components";

const ImageHolder = styled.div`
    width: 100%;

`

const DimeImg = styled.img`
    width: 100%;
    object-fit: contain;
`

const Single = ({images}) => {
    return (
        <ImageHolder>
            <DimeImg src={images[0]}/>
        </ImageHolder>
    )
}

export default Single;