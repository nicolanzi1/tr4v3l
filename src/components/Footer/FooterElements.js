import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterContainer = styled.div`
    padding: 2rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

export const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

export const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 2rem;
        color: #f26a2e;
        cursor: pointer;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

export const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    margin-left: 50%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const WebsiteRights = styled.small`
    color: #000;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`