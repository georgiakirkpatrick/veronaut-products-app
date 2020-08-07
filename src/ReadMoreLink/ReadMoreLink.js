import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ReadMoreLink.css';

function ReadMoreLink(props) {
    return (
        <a href={props.link}>
            <p className='ReadMoreLink'>
                <span>{props.text} </span>
                <FontAwesomeIcon icon="arrow-right" />
            </p>
        </a>
    )
}

export default ReadMoreLink;