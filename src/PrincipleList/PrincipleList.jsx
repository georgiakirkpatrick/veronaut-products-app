import React from 'react'
import Principle from '../Principle/Principle'
import './PrincipleList.css'

const PrincipleList = props => {
  const {
    principles,
    readMore
  } = props

  const generatePrinciples = principles.map(principle => (
    <Principle
      key={principle.id}
      title={principle.title} 
      description={principle.description}
      symbol={principle.symbol}
    />
  ))
  
  return (
    <section className='PrincipleList'>
      <header>
        <h2>
          Transparency is key
        </h2>

        <p>
          Veronaut helps you understand product descriptions and points out the information brands choose to omit.
        </p>
      </header>

      <ul>
        {generatePrinciples}
      </ul>

      {readMore}
    </section>
  )
}

PrincipleList.defaultProps = {
  principles: [],
  readMore: ''
}

export default PrincipleList;