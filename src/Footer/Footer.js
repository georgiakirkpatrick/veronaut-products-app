import React from 'react';
import FooterPageLinkList from '../FooterPageLinkList/FooterPageLinkList';
import FooterSocialLinkList from '../FooterSocialLinkList/FooterSocialLinkList';
import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp';
import './Footer.css';

const Footer = () => {
    const footerLinks = [
        {
            id: 1,
            name: 'About',
            route: '/about'
        },
        {
            id: 2,
            name: 'Recommend a brand',
            route: '/recommend-a-brand'
        },
        {
            id: 3,
            name: 'Contact',
            route: '/contact'
        },
        {
            id: 4,
            name: 'Press and media',
            route: '/press-and-media'
        },
        {
            id: 5,
            name: 'For brands',
            route: '/for-brands'
        }
    ]

    const socialLinks = [
        {
            id: 601,
            pathToProfile: 'https://www.instagram.com/shewantspockets/',
            platform: 'Instagram'
        },
        {
            id: 701,
            pathToProfile: 'https://www.youtube.com/shewantspockets',
            platform: 'YouTube'
        }
    ]
        
    return (
       <footer>
           <FooterPageLinkList footerLinks={footerLinks} />
           <FooterSocialLinkList socialLinks={socialLinks} />
           <NewsletterSignUp />
       </footer>
    );
}

export default Footer;