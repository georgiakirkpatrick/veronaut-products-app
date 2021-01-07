import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './MenuItem.css'

const MenuItem = props => {
    const leftIcon = props.leftIcon 
        ? <span className='MenuItem__icon-left'>{props.leftIcon}</span>
        : <div className='empty' />

    const rightIcon = props.rightIcon 
        ? <span className='MenuItem__icon-right'>{props.rightIcon}</span>
        : <div className='empty' />
    
    return (
    <Router>
        <Link
            className={`MenuItem__${props.itemType}`}
            to={props.to}
            onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
        >
            {leftIcon}
            <span>{props.children}</span>
            {rightIcon}
        </Link>
    </Router>
    )
}

MenuItem.defaultProps = {
    leftIcon: '',
    rightIcon: '',
    itemType: 'primary',
    to: '/',
    goToMenu: 'main',
    setActiveMenu: () => {}
}

export default MenuItem