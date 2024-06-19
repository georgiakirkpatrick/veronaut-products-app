import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import React from 'react';
import './Principle.css';

const Principle = props => {
  const {
    title,
    description,
    symbol
  } = props

  return (
    <li className='Principle'>
      <FontAwesomeIcon icon={symbol} size='lg' />
      <h3>{title}</h3>
      <p>{description}</p>
    </ li>
  )
}

Principle.defaultProps = {
  title: '',
  description: '',
  symbol: ''
}

export default Principle;