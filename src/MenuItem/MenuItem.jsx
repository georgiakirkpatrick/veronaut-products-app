import React from 'react'
import { Link } from 'react-router'
import './MenuItem.css'

const MenuItem = ({
  children = <div />,
  goToMenu = 'main',
  leftIcon = '',
  rightIcon = '',
  itemType = 'primary',
  to = '/',
  setActiveMenu = () => {}
}) => {
  
  const left = leftIcon 
    ? <span className='MenuItem__icon-left'>{leftIcon}</span>
    : <div className='empty' />

  const right = rightIcon 
    ? <span className='MenuItem__icon-right'>{rightIcon}</span>
    : <div className='empty' />
  
  return (
    <Link
      className={`MenuItem__${itemType}`}
      to={to}
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      {left}
      <span>{children}</span>
      {right}
    </Link>
  )
}

export default MenuItem