import React from 'react'
import './Backdrop.css'

const Backdrop = props => {
    const {
        handleClick,
        mobMenuOpen
    } = props

    return (
        <div 
            onClick={handleClick} 
            className={mobMenuOpen ? 'Backdrop active' : 'Backdrop'} 
        />
    )
}

Backdrop.defaultProps = {
    handleClick: () => {},
    mobMenuOpen: true
}

export default Backdrop