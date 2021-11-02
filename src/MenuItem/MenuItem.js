import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

const MenuItem = props => {
    const {
        children,
        goToMenu,
        itemType,
        leftIcon,
        rightIcon,
        to,
        setActiveMenu
    } = props

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

MenuItem.defaultProps = {
    goToMenu: 'main',
    leftIcon: '',
    rightIcon: '',
    itemType: 'primary',
    to: '/',
    setActiveMenu: () => {}
}

export default MenuItem