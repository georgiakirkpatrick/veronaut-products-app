import React from 'react'
import ProductListPage from '../ProductListPage/ProductListPage'
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

export default ProductDetailCarousel