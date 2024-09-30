import styled from "styled-components";

const PageHeader = styled.h1`
    font-size: clamp(80px, 10vw, 100px);
`


const Header = ({first, second, colour}) => {
    return (
        <PageHeader style={{color: colour}}>
            {first}<br /><span style={{paddingLeft: "clamp(10px, 10vw, 120px)"}}>{second}</span>
        </PageHeader>
    )
}

export default Header;