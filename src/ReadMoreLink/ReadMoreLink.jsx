import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../FontAwesomeIcons/FontAwesomeIcons'
import './ReadMoreLink.css'

const ReadMoreLink = ({
  link = '/',
  text = ''
}) => {
  return (
    <Link className='ReadMoreLink' to={link}>
      <p>
        <span>{text} </span>
        <FontAwesomeIcon icon="arrow-right" />
      </p>
    </Link>
  )
}

export default ReadMoreLink