import React from 'react';
import './Principle.css';


const Principle = props => {
    return (
        <li className='Principle' key={props.id}>
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