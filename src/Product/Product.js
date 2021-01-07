import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = props => {
    console.log('props.productSlug', props.productSlug)
    return (
        <li className='Product' key={props.id}>
            <Link to={`/product/${props.id}/${props.productSlug}`}>
                <div className='Product__cropped'>
                    <img src={props.pathToImg} alt={props.imgAlt} />
                </div>
                <p className='Product__brand-and-title'>
                    <span >{props.brand} </span>
                    <span>{props.productTitle}</span>
                </p>
                <p className='Product__price'>${props.price}</p>
            </Link>
        </li>
    )
}

export default Product