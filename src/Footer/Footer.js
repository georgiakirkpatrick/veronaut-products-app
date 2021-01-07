import React from 'react'
import FooterSocialLinkList from '../FooterSocialLinkList/FooterSocialLinkList'
import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp'
import './Footer.css'

const Footer = () => {
    const socialLinks = [
        {
            id: 1,
            pathToProfile: 'https://www.instagram.com/shewantspockets/',
            platform: 'Instagram'
        },
        {
            id: 2,
            pathToProfile: 'https://www.youtube.com/shewantspockets',
            platform: 'YouTube'
        }
    ]
        
    return (
       <footer>
           <FooterSocialLinkList socialLinks={socialLinks} />
           <NewsletterSignUp />
       </footer>
    )
}

export default Footer