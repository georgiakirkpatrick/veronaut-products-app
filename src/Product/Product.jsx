import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({
  brand = '',
  id = 0,
  imgAlt = '',
  pathToImg = '',
  price = 0,
  productSlug = '',
  productTitle = ''
}) => {
  return (
    <li className='Product' id={id}>
      <Link 
        to={`/product/${id}/${productSlug}`}
      >
        <div className='Product__cropped'>
          <img src={pathToImg } alt={imgAlt} />
        </div>
        
        <p className='Product__brand-and-title'>
          <span >{brand} </span>
          <span>{productTitle}</span>
        </p>
        
        <p className='Product__price'>${price}</p>
      </Link>
    </li>
  )
}

export default Product