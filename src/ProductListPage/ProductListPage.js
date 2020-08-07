import React from 'react'
import Product from '../Product/Product'
import FilterButtonSection from '../FilterButtonSection/FilterButtonSection'
import './ProductListPage.css'


function ProductListPage(props) {
    const generateProductList = props.products.map(product => (
        <Product 
            key={product.id} 
            id={product.id} 
            pathToImg={product.pathToImg} 
            imgAlt={product.imgAlt} 
            brand={product.brand} 
            productTitle={product.productTitle} 
            price={product.price}
        />
    ))
    
    return (
        <section className='ProductListPage'>
            <header>
                <h1>
                    Dresses
                </h1>
            </header>

            <FilterButtonSection selectedFilters={props.selectedFilters} />
            
            <ul className='ProductListPage__product-list'>
                {generateProductList}
            </ul>
        </section>
    )
}

ProductListPage.defaultProps = {
    products: []
}

export default ProductListPage