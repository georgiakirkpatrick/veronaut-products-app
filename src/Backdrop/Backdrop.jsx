import React from 'react'
import './Backdrop.css'

const Backdrop = ({
  handleClick = () => {},
  mobMenuOpen = true
}) => {
  return (
    <div 
      onClick={handleClick} 
      className={mobMenuOpen ? 'Backdrop active' : 'Backdrop'} 
    />
  )
}

export default Backdrop