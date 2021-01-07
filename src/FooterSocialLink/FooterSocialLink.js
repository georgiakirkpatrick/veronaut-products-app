import React from 'react'
import './FooterSocialLink.css'

const FooterSocialLink = props => {
    return (
        <li className='Footer__social-link' key={props.id}>
            <a href={props.pathToProfile}>
                {props.platform}
            </a>
        </li>
    )
}

FooterSocialLink.defaultProps = {
    id: 1,
    pathToProfile: 'http://instagram.com/veronaut',
    platform: 'Instagram'
}

export default FooterSocialLink