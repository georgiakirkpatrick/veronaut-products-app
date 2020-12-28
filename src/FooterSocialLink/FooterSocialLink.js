import React from 'react';
import { Link } from 'react-router-dom'
import './FooterSocialLink.css'

const FooterSocialLink = props => {
    return (
        <li className='Footer__social-link' key={props.id}>
            <Link to={props.pathToProfile}>
                {props.platform}
            </Link>
        </li>
    )
};

export default FooterSocialLink;