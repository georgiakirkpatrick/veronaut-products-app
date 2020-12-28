import React from 'react';
import './Principle.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Principle = props => {
    return (
        <li className='Principle' key={props.id}>
            {/* <FontAwesomeIcon icon={props.icon} /> */}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </ li>
    )
}

Principle.defaultProps = {
    principleDescription: [],
    principleTitle: []
}

export default Principle;