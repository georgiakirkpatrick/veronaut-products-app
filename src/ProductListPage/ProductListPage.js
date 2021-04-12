import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import config from '../config.js'
import './ProductListPage.css'

const ProductListPage = props => {
    const [productList, setProductList] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(false)
    const [error, setError] = useState(null)

    const selectedCategoryId = Number(props.routeProps.match.params.categoryId)

    useEffect(() => {
        const getProductsForCategory = categoryId => {
            fetch(`${config.API_URL}/api/categories/${categoryId}/products`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }
                    return response.json()
            })
            .then(productArray => {
                setProductList(productArray)
                setProductsLoaded(true)
            },
            err => {
                setError(err)
                setProductsLoaded(true)
            })
        }
        getProductsForCategory(selectedCategoryId)
    }, [selectedCategoryId])

    const makeProductSlug = product => {
        const brandProduct = `${product.brand_name} ${product.english_name}`
        return brandProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    const formatProductList = productList.map(product => (
        <Product
            id={product.id}
            productTitle={product.english_name}
            brand={product.brand_name}
            brandCurrencyId={product.brand_currency}
            pathToImg={product.feature_image_url}
            colorOptions={product.multiple_color_options}
            brandCurrency={product.brand_currency}
            price={product.cost_in_home_currency}
            imgAlt={product.brand_name + ' ' + product.english_name}
            productSlug={makeProductSlug(product)}
        />
    ))

    const results = productList.length === 0
        ? <div className='ProductListPage__no-products'>
            <p>Sorry, there are not any products in this category yet.</p>
        </div>
        : formatProductList

    if (error) {
        return <div> {error.message} </div>
    } else if (!productsLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <>
                <section className='ProductListPage'>
                    <header>
                        <h1>
                            {props.categoryList[selectedCategoryId - 1].english_name}
                        </h1>
                    </header>
                    
                    <ul className='ProductListPage__product-list'>
                        {results}
                    </ul>

                </section>
            </>
        )
    }

}

ProductListPage.defaultProps = {
    products: [],
    routeProps: {
        match: {
            params: {
                categoryId: '4'
            }
        }
    }
}

export default ProductListPage