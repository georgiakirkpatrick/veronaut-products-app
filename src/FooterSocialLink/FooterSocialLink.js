import React from 'react';
import './FooterSocialLink.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../FontAwesomeIcons/FontAwesomeIcons';

function FooterSocialLink(props) {
    return (
        <li className='Footer__social-link' key={props.id}>
            <a href={props.pathToProfile}>
                {props.platform}
            </a>
        </li>
    )
};

export default FooterSocialLink;