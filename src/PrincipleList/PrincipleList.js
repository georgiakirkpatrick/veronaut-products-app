import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Principle from '../Principle/Principle'
import './PrincipleList.css'

const PrincipleList = props => {
    const generatePrinciples = props.principles.map(principle => (
        <Principle
            key={principle.id}
            id={principle.id}
            title={principle.title} 
            description={principle.description}
        />
    ))
    
    return (
        <>
            <Header allCategories={props.allCategories}/>
            <section className='PrincipleList'>
                <h2>
                    Principles
                </h2>
                <ul>
                    {generatePrinciples}
                </ul>
                {props.readMore}
            </section>
            <Footer />
        </>
    )
}

PrincipleList.defaultProps = {
    principles: []
}

export default PrincipleList;