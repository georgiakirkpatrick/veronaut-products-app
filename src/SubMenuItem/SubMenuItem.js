import React from 'react'
import { Link } from 'react-router-dom';
import './SubMenuItem.css'

const SubMenuItem = props => {

    const click = props.click === 'close' 
        ? props.goToMenu && props.setActiveMenu(props.goToMenu) && props.close
        : props.goToMenu  && props.setActiveMenu(props.goToMenu)

    return (
        <Link
            className='MenuItem'
            to={props.to}
            onClick={() => props.goToMenu  && props.setActiveMenu(props.goToMenu)}
        >
            <span className='MenuItem__icon-left'>{props.leftIcon}</span>
                {props.children}
            <span className='MenuItem__icon-right'>{props.rightIcon}</span>
        </Link>
    )
}

export default MenuItem