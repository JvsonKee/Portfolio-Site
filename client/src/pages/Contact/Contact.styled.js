import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Link = styled.a`
    text-decoration: none;
    color: var(--white);
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--teal);
    }
`

export const EmailContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: var(--sora-font);
    font-size: 40px;

    @media screen and (max-width: 600px) {
        font-size: 25px;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
`

export const Email = styled.div`
    font-style: italic;
`

export const Platforms = styled.div`
    display: flex;
    gap: 20px;
`