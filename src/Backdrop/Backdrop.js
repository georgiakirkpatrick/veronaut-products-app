import React from 'react';
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
    click: () => {}
}

export default Backdrop;