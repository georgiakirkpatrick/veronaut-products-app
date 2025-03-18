import React from 'react'
import Principle from '../Principle/Principle'
import './PrincipleList.css'

const PrincipleList = ({
  principles = [
    {
      id: 1,
        title: 'Good design', 
        description: 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.',
        symbol: 'times'
    }
  ],
  readMore = ''
}) => {
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

export default PrincipleList;