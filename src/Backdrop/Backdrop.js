import React from 'react'
import './Backdrop.css'

const Backdrop = props => {
    return (
        <div 
            onClick={props.handleClick} 
            className={props.mobMenuOpen ? 'Backdrop active' : 'Backdrop'} 
        />
    )
}

Backdrop.defaultProps = {
    handleClick: () => {},
    mobMenuOpen: true
}

export default Backdrop