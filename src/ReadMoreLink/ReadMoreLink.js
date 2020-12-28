import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ReadMoreLink.css';

const ReadMoreLink = props => {
    return (
        <Link className='ReadMoreLink' to={props.link}>
            <p>
                <span>{props.text} </span>
                <FontAwesomeIcon icon="arrow-right" />
            </p>
        </Link>
    )
}

export default ReadMoreLink;