import React from 'react'
import './ProductDetailCarousel.css'

const ProductDetailCarousel = props => {
    return (
        <div 
            id={props.id}
            className='ProductDetailCarousel'
        >
            <div className='ProductDetailCarousel__items'>
                {props.children}
            </div>
        </div>
    )
}

ProductDetailCarousel.defaultProps = {
    id: 0
}

export default ProductDetailCarousel