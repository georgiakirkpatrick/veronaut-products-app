import React from 'react';
import './FooterPageLink.css'

function FooterPageLink(props) {
    return (
        <li className='Footer__page-link' key={props.id}>
            <a href={props.route}>
                {props.name}
            </a>
        </li>
    )
}

export default FooterPageLink;