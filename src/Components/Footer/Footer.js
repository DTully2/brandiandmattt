import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { RiMickeyLine } from 'react-icons/ri';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">Our Pets</FooterLink>
                        <FooterLink to="/">Favorite Movies</FooterLink>
                        <FooterLink to="/">Games</FooterLink>
                        <FooterLink to="/">Menu</FooterLink>
                        <FooterLink to="/">Gallery</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Groomsman</FooterLink>
                        <FooterLink to="/">Bridal Party</FooterLink>
                        <FooterLink to="/">Parents of Groom</FooterLink>
                        <FooterLink to="/">Parents of Bride</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Things to Do</FooterLinkTitle>
                        <FooterLink to="/">Restaurants </FooterLink>
                        <FooterLink to="/">Sites to Visit</FooterLink>
                        <FooterLink to="/">Beaches</FooterLink>
                        <FooterLink to="/">Shopping</FooterLink>
                        <FooterLink to="/">Golf</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Check this out</FooterLinkTitle>
                        <FooterLink to="/">Funny pet videos</FooterLink>
                        <FooterLink to="/">Prank videos</FooterLink>
                        <FooterLink to="/">Cats Cats and more cats</FooterLink>
                        <FooterLink to="/">Motivation</FooterLink>
                        <FooterLink to="/">Donate to our local TAAG</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                <RiMickeyLine />
                </SocialLogo>
                
                <WebsiteRights>Rob Martel © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                    <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Instagram" >
                    <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                    <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="YouTube">
                    <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                    <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
