import { Bottom, CardContainer, CardContentContainer, CardDescription, CardLabel, Image, TagContainer, TagHolder, Top } from "./Card.styled";
import propTypes from 'prop-types';

function Card( {width, label, description, tags, images} ) {

    let imgWidth;
    let justify;
    if (images) {
        if (images.length == 1) {
            imgWidth = 75;
            justify = "center";
        } else {
            imgWidth = (100 / images.length) - 1;
        }   
    }

    return (
        <CardContainer style={{width: width}}>
            <CardContentContainer>
                <Top>
                    <CardLabel>{label}</CardLabel>
                    <CardDescription>{description}</CardDescription>
                    <TagContainer>
                        {
                            tags.map((tag, i) => (
                                <Tag name={tag} key={i} />
                            ))
                        }
                    </TagContainer>
                </Top>
                <Bottom style={{justifyContent: justify}}>
                    {   
                        images ? 
                        images.map((image, i) => (
                            <Image src={image} key={i} style={{width: `${imgWidth}%`}}/>
                        )):
                        null
                    }
                </Bottom>
            </CardContentContainer>
        </CardContainer>
    )
}


function Tag( {name} ) {
    return (
        <TagHolder>{name}</TagHolder>
    )
}

Card.propTypes = {
    description: propTypes.string,
    width: propTypes.string,
    label: propTypes.string,
    tags: propTypes.array,
    images: propTypes.array
}

Tag.propTypes = {
    name: propTypes.string
}

export default Card;