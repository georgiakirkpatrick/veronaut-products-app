import React from 'react'
import './Product.css'

function Product(props) {
    return (
        <li className='Product' key={props.id}>
            <div className='Product__cropped'>
                <img src={props.pathToImg} alt={props.imgAlt} />
            </div>
            <h2 className='Product__brand'>{props.brand}</h2>
            <p className='Product__title'>{props.productTitle}</p>
            <p className='Product__price'>{props.price}</p>
        </li>
    )
}

export default Product