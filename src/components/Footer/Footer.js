import React from 'react'
import { FooterContainer, FooterDesc, FooterLink, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>TR4V3L</h1>
                    <p>We strive to create the best experiences for our customers</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/">Support</FooterLink>
                    <FooterLink to="/">Destinations</FooterLink>
                    <FooterLink to="/">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/about">Submit Video</FooterLink>
                    <FooterLink to="/">Ambassador</FooterLink>
                    <FooterLink to="/">Agency</FooterLink>
                    <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/about">Instagram</FooterLink>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">Youtube</FooterLink>
                    <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer
