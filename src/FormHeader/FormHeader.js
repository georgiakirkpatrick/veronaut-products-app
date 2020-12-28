import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import Backdrop from '../Backdrop/Backdrop';
// import Dropdown from '../Dropdown/Dropdown'
import './FormHeader.css';

const FormHeader = () => {
    // When the mobile hamburger button is clicked, the menu opens.
    const [mobileMenu, setMobileMenuOpen] = useState(false);
    const handleHamClick = () => setMobileMenuOpen(true);

    // DO NOT DELETE
    // Open and close dropdown menu in mobile view.
    // const [dropdown, setDropdown] = useState(false);
    // const toggleDropdown = () => setDropdown(!dropdown);
    // const closeDropdown = () => setDropdown(false);

    // When the close button in the mobile menu is clicked, the menu closes.
    // When the backdrop is clicked, the menu closes.
    const handleCloseClick = () => {
        setMobileMenuOpen(false);
        // closeDropdown();
        // DO NOT DELETE
    }    

    return (
        <>
            <nav className='FormHeader'>
                <div className='FormHeader__top'>
                    <div className='FormHeader__item'>
                        <button 
                            className='FormHeader__hamburger' 
                            type='button' 
                            onClick={handleHamClick}
                        >
                            <FontAwesomeIcon icon={'bars'} size='lg'/>
                        </button>
                    </div>
                    
                    <Link to='/' className='FormHeader__logo FormHeader__item'>
                        <h4>
                            SWP
                        </h4>
                    </Link>
                    
                    <div className='FormHeader__search-user FormHeader__item'>
                        <button href='www.shewantspockets.com'>
                            <FontAwesomeIcon icon="search" size='lg' />
                        </button>

                        <button href='www.shewantspockets.com'>
                            <FontAwesomeIcon icon="user-circle" size='lg' />
                        </button>
                    </div>
                </div>

                <Backdrop handleClick={handleCloseClick} mobileMenu={mobileMenu} />

                <div className={mobileMenu ? 'FormHeader__menu active' : 'FormHeader__menu'}>
                    <button className='close-button' type='button' onClick={handleCloseClick} >
                        <FontAwesomeIcon icon='times' size='lg' />
                    </button>

                    <ul>
                        <li>
                            <Link 
                                to='/'
                                onClick={handleCloseClick}
                            >
                                Home
                            </Link>
                        </li>

                        {/* <Dropdown
                            categories={props.categories}
                            closeMobileMenu={handleCloseClick}
                            mobileMenu={mobileMenu}
                            dropdown={dropdown}
                            toggleDropdown={toggleDropdown}
                            closeDropdown={closeDropdown}
                        /> */}
                        
                        <li>
                            <Link 
                                to='/brand' 
                                onClick={handleCloseClick}
                            >
                                Brands
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to='/principles' 
                                onClick={handleCloseClick}
                            >
                                Principles
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to='/about' 
                                onClick={handleCloseClick}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to='/add-product' 
                                onClick={handleCloseClick}
                            >
                                Add Product
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>  
    );
};

export default FormHeader;