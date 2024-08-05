import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import React from 'react';
import './Principle.css';

const Principle = ({
  title = '',
  description = '',
  symbol = ''
}) => {
  return (
    <li className='Principle'>
      <FontAwesomeIcon icon={symbol} size='lg' />
      <h3>{title}</h3>
      <p>{description}</p>
    </ li>
  )
}

export default Principle