import { IntroductionBig, IntroductionContainer, IntroductionSmall } from "./PageIntro.styled";
import propTypes from 'prop-types';

function PageIntro( {bigString, smallString}) {
    return (
        <IntroductionContainer>
            <IntroductionBig>{bigString}</IntroductionBig>
            <IntroductionSmall>{smallString}</IntroductionSmall>
        </IntroductionContainer>
    )
}

PageIntro.propTypes = {
    bigString: propTypes.string, 
    smallString: propTypes.string
}

export default PageIntro;