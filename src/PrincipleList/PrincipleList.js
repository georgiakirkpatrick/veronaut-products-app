import React from 'react';
import Principle from '../Principle/Principle';
import './PrincipleList.css';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';

function PrincipleList(props) {
    const generatePrinciples = props.principles.map(principle => (
        <Principle
            key={principle.id}
            id={principle.id}
            // icon={principle.icon} 
            title={principle.title} 
            description={principle.description}
        />
    ))
    
    return (
        <div>
             <ul className='PrincipleList'>
                {generatePrinciples}
            </ul>

            <ReadMoreLink 
                link='/principles' 
                text='Learn more about our selection criteria'
            />
        </div>
       
    )
}

PrincipleList.defaultProps = {
    principles: []
}

export default PrincipleList;