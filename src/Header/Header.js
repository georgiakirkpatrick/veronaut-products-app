import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import Backdrop from '../Backdrop/Backdrop';
import MenuItem from '../MenuItem/MenuItem'
import './Header.css';

const Header = () => {
    const [mobMenuOpen, setMobMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main')

    const handleHamClick = () => setMobMenuOpen(true);
    const handleCloseClick = () => {
        setMobMenuOpen(false);
    }

    return (
        <nav className='Header'>
            <div className='Header__top'>
                <div className='Header__item'>
                    <button 
                        className='Header__hamburger' 
                        type='button' 
                        onClick={handleHamClick}
                    >
                        <FontAwesomeIcon icon={'bars'} size='lg'/>
                    </button>
                </div>
                
                <Link to='/' className='Header__logo Header__item'>
                    <h1>
                        VERONAUT
                    </h1>
                </Link>
                
                <div className='Header__search-user Header__item'>
                    {/* <button >
                        <FontAwesomeIcon icon="search" size='lg' />
                    </button>

                    <Link
                        to='/account'
                    >
                        <FontAwesomeIcon icon="user-circle" size='lg' />
                    </Link> */}
                </div>
            </div>

            <Backdrop handleClick={handleCloseClick} mobMenuOpen={mobMenuOpen} />

            <div className={mobMenuOpen ? 'Header__menu active' : 'Header__menu'}>
                <button className='close-button' type='button' onClick={handleCloseClick} >
                    <FontAwesomeIcon icon='times' size='lg' />
                </button>

                <CSSTransition 
                    in={activeMenu === 'main'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={500} //defines length of animation
                    className='Header__menu-primary'
                >
                    <div>
                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Home
                            </MenuItem>
                        </div>
                        
                        <div className='Header__primary-item'>
                            <MenuItem
                                to='#'
                                itemType='primary'
                                rightIcon={<FontAwesomeIcon icon={'angle-right'} size='lg'/>}
                                setActiveMenu={setActiveMenu}
                                goToMenu='categories'
                            >
                                Categories
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item'  onClick={handleCloseClick}>
                            <MenuItem
                                to='/about'
                                itemType='primary'
                                setActiveMenu={setActiveMenu} 
                            >
                                About
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/add-product'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Add a Product
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/create-account'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Create an account
                            </MenuItem>
                        </div>

                        <div className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/login'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Log in
                            </MenuItem>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'categories'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={500} //defines length of animation
                    className='Header__menu-secondary'
                >
                    <div className='Header__secondary-item'>
                        <MenuItem
                            to='#'
                            goToMenu='main'
                            itemType='secondary-menu-header'
                            leftIcon={<FontAwesomeIcon icon='angle-left' size='lg'/>}
                            rightIcon=' '
                            setActiveMenu={setActiveMenu}
                            handleCloseClick={handleCloseClick}
                        >
                            Categories
                        </MenuItem>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/1/activewear'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Activewear
                            </MenuItem>
                        </div>
                        
                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/2/blazers'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Blazers    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/3/coats-and-jackets'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Coats + Jackets    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/4/dresses'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Dresses    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/5/facemasks'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Facemasks    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/6/hair-accessories-and-hats'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Hair Accessories + Hats    
                            </MenuItem>
                        </div>

                        {/* <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/7/jeans'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Jeans    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/8/jumpsuits'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Jumpsuits    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/9/lingerie-and-loungewear'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Lingerie + Loungewear    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/10/pants'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Pants    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/11/shoes'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Shoes    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/12/skirts'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Skirts    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/13/socks-and-tights'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Socks + Tights    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/14/sweaters'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Sweaters    
                            </MenuItem>
                        </div>


                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/15/swimwear'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Swimwear    
                            </MenuItem>
                        </div>

                        <div onClick={handleCloseClick}>
                            <MenuItem
                                to='/category/16/tops'
                                goToMenu='main'
                                itemType='secondary'
                                setActiveMenu={setActiveMenu}
                                handleCloseClick={handleCloseClick}
                            >
                                Tops    
                            </MenuItem>
                        </div> */}
                    </div>
                </CSSTransition>
            </div>
        </nav>
    )
}

export default Header;