import React from 'react'
import { Link } from 'react-router-dom'
// import currencies from '../CURRENCIES'
import './Product.css'

const Product = props => {
    // const currencySymbol = currencies[props.brandCurrencyId]

    return (
        <li className='Product' key={props.id} id={props.id}>
            <Link to={`/product/${props.id}/${props.productSlug}`}>
                <div className='Product__cropped'>
                    <img src={props.pathToImg } alt={props.imgAlt} />
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

Product.defaultProps = {
    brand: '',
    key: 0,
    id: 0,
    imgAlt: '',
    pathToImg: '',
    price: 0,
    productSlug: '',
    productTitle: ''
}

export default Product