import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../FontAwesomeIcons/FontAwesomeIcons'
import Backdrop from '../Backdrop/Backdrop'
import MenuItem from '../MenuItem/MenuItem'
import TokenService from '../services/token-service'
import './Header.css'

const Header = props => {
    const {
        categoryArray,
        background
    } = props

    const [mobMenuOpen, setMobMenuOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('main')

    const handleHamClick = () => setMobMenuOpen(true)
    const handleCloseClick = () => {
        setMobMenuOpen(false)
    }

    const handleLogOutClick = () => {
        setMobMenuOpen(false)
        TokenService.clearAuthToken()
    }

    const logInOutToggle = () => TokenService.hasAuthToken() 
        ? handleLogOutClick()
        : setMobMenuOpen(false)

    const logInLink = <MenuItem
            to='/login'
            itemType='primary'
            setActiveMenu={setActiveMenu}
        >
        Log in
    </MenuItem>

    const logOutLink = <MenuItem
        // to='/'
        itemType='primary'
        setActiveMenu={setActiveMenu}
    >
        Log out
    </MenuItem>

    const accountLink = TokenService.hasAuthToken() 
        ? logOutLink
        : logInLink

    const makeCategorySlug = categoryName => {
        return categoryName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .replace(/,/g, '')
            .toLowerCase()
    }

    return (
        <nav className={`Header ${background}`}>
            <div className='Header__top'>
                <div className='Header__item'>
                    <button 
                        className='Header__hamburger' 
                        type='button' 
                        onClick={handleHamClick}
                    >
                        <div className='bars'>
                            <div className='bar-1'></div>
                            <div className='bar-2'></div>
                            <div className='bar-3'></div>
                        </div>
                    </button>
                </div>
                
                <Link to='/' className='Header__logo Header__item'>
                    <h1>
                        VERONAUT
                    </h1>
                </Link>
                
                <div className='Header__search-user Header__item' />
            </div>

            <Backdrop handleClick={handleCloseClick} mobMenuOpen={mobMenuOpen} />

            <div
                className='Header__desktop-menu'
            >

            </div>
            
            <div className={mobMenuOpen ? 'Header__menu active' : 'Header__menu'}>
                <button className='close-button' type='button' onClick={handleCloseClick} >
                    <FontAwesomeIcon icon='times' size='lg' />
                </button>

                <CSSTransition 
                    in={activeMenu === 'main'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={0} //defines length of animation
                    className='Header__menu-primary'
                >
                    <ul>
                        <li className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Home
                            </MenuItem>
                        </li>
                        
                        <li className='Header__primary-item'>
                            <MenuItem
                                to='#'
                                itemType='primary'
                                rightIcon={<FontAwesomeIcon icon='angle-right' size='lg'/>}
                                setActiveMenu={setActiveMenu}
                                goToMenu='categories'
                            >
                                Categories
                            </MenuItem>
                        </li>

                        <li className='Header__primary-item'  onClick={handleCloseClick}>
                            <MenuItem
                                to='/about'
                                itemType='primary'
                                setActiveMenu={setActiveMenu} 
                            >
                                About
                            </MenuItem>
                        </li>

                        <li className='Header__primary-item'  onClick={handleCloseClick}>
                            <MenuItem
                                to='/account'
                                itemType='primary'
                                setActiveMenu={setActiveMenu} 
                            >
                                Account
                            </MenuItem>
                        </li>

                        <li className='Header__primary-item' onClick={handleCloseClick}>
                            <MenuItem
                                to='/add-product'
                                itemType='primary'
                                setActiveMenu={setActiveMenu}
                            >
                                Add a Product
                            </MenuItem>
                        </li>

                        <li className='Header__primary-item' onClick={logInOutToggle}>
                            {accountLink}
                        </li>
                    </ul>
                </CSSTransition>

                <CSSTransition 
                    in={activeMenu === 'categories'} // when activeMenu === 'main', we will render the children inside this component
                    unmountOnExit // removes children when not active
                    timeout={1} //defines length of animation
                    className='Header__menu-secondary'
                >
                    <div 
                        id='categories'
                        className='Header__secondary-item'
                    >
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

                        {categoryArray.map(category => {
                            const slug = makeCategorySlug(category.text)
                            return (
                                <div key={category.id} className='Header__secondary-item' onClick={handleCloseClick}>
                                    <MenuItem
                                        to={`/category/${category.id}/${slug}`}
                                        goToMenu='main'
                                        itemType='secondary'
                                        setActiveMenu={setActiveMenu}
                                        handleCloseClick={handleCloseClick}
                                    >
                                        {category.text}    
                                    </MenuItem>
                                </div>
                            )
                        })}
                    </div>
                </CSSTransition>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    categoryArray: []
}

export default Header