import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown';
import '../FontAwesomeIcons/FontAwesomeIcons'
import './MenuSideDrawer.css';

const MenuSideDrawer = props => {
    let drawerClasses = ['MenuSideDrawer'];
    
    if (props.show) {
        drawerClasses = ['MenuSideDrawer', 'open']
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <button className='close-button' type='button' onClick={props.close} >
                <FontAwesomeIcon icon='times' className='times-icon' size='lg' />
            </button>

            <ul>
                <li>
                    <Link 
                        to='/'
                        // onClick={closeMobileMenu}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        to='/category'
                        // onClick={closeMobileMenu}
                    >
                        Categories <FontAwesomeIcon icon='caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>

                <li>
                    <Link 
                        to='/brand' 
                        // onClick={closeMobileMenu}
                    >
                        Brands
                    </Link>
                </li>

                <li>
                    <Link 
                        to='/principles' 
                        // onClick={closeMobileMenu}
                    >
                        Principles
                    </Link>
                </li>

                <li>
                    <Link 
                        to='/about' 
                        // onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuSideDrawer;