import styled from "styled-components";

const ImageHolder = styled.div`
    position: relative;
    width: 100%;
`

const CodeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const CSVImage = styled.img`
    position: absolute;
    right: -20px;
    top: 270px;
    width: 70%;

    @media screen and (max-width: 800px) {
        top: 200px;
    }

    @media screen and (max-width: 600px) {
        right: 0;
        top: 100px;
    }
`

const Stacked = ({images}) => {
    return (    
        <ImageHolder>
            <CodeImage src={images[0]}/>
            <CSVImage src={images[1]} />
        </ImageHolder>
    )
}

export default Stacked;