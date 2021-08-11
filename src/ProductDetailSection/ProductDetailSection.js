import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './ProductDetailSection.css'

const ProductDetailSection = props => {
    const {
        children,
        closeButton,
        id,
        openButton,
        sectionOpen,
        sectionTitle
    } = props

    const handleClick = sectionOpen ? closeButton : openButton
    const displayButton = sectionOpen ? 'times' : 'angle-down'
    const sectionClass = sectionOpen ? 'ProductDetailSection active' : 'ProductDetailSection'
    return (
        <>
            <hr></hr>

            <section id={id}>
                <button 
                    className='ProductDetailSection__button' 
                    type='button' 
                    onClick={handleClick}
                >
                        <FontAwesomeIcon icon={displayButton} />
                </button>
                    <header onClick={handleClick}>
                    <h3>
                        {sectionTitle}
                    </h3>
                </header>

                <ul className={sectionClass}>
                    {children}
                </ul>
            </section>
        </>
    )
}

ProductDetailSection.defaultProps = {
    children: '',
    closeButton: () => {},
    id: 1,
    openButton: () => {},
    sectionOpen: false,
    sectionTitle: ''
}

export default ProductDetailSection
