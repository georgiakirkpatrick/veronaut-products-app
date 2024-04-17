import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import config from '../config'
import './ProductListPage.css'

const ProductListPage = props => {
    const {
        categoryArray,
        productArray,
        routeProps,
        setProductArray
    } = props

    const [catProdError, setCatProdError] = useState(null)
    const [catProdLoaded, setCatProdLoaded] = useState(false)
    const [newProdLoaded, setNewProdLoaded] = useState(false)
    const [newProdError, setNewProdError] = useState(false)

    const categoryId = routeProps.match.params.categoryId

    const listTitle = routeProps.match.path === '/'
        ? 'New products'
        : categoryArray[categoryId - 1].text

    useEffect(() => {
        const getProductsForCategory = id => {
            fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}/products`, {
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
            .then(products => {
                setProductArray(products)
                setCatProdLoaded(true)
            },
            err => {
                setCatProdError(err)
                setCatProdLoaded(false)
            })
        }

        const getFeaturedProducts = () => {
            fetch(`${process.env.REACT_APP_API_URL}/api/products/featured`, {
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
            .then(products => {
                setProductArray(products)
                setNewProdLoaded(true)
            },
            err => {
                setNewProdError(err)
                setNewProdLoaded(false)
            })
        }

        if (routeProps.match.params.categoryId) {
            getProductsForCategory(routeProps.match.params.categoryId)
        } else {
            getFeaturedProducts()
        }
    }, [routeProps.match.params.categoryId, setProductArray])

    const makeProductSlug = product => {
        const brandProduct = `${product.brand_name} ${product.english_name}`
        return brandProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    const productList = <ul className='ProductListPage__product-list'>
        {productArray.map(product => (
            <Product
                brand={product.productObject.brand_name}
                id={product.productObject.id}
                imgAlt={product.productObject.brand_name + ' ' + product.productObject.english_name}
                key={product.productObject.id}
                pathToImg={product.productObject.feature_image_url}
                price={product.productObject.cost_in_home_currency}
                productSlug={makeProductSlug(product.productObject)}
                productTitle={product.productObject.english_name}
            />
        ))}
    </ul>

    const results = productArray.length === 0
        ? <div className='ProductListPage__no-products'>
            <p>Sorry, there are not any products in this category yet.</p>
        </div>
        : productList
        
    if (catProdError) {
        return <div> {catProdError.message} </div>
    } else if (newProdError) {
        return <div> {newProdError.message} </div>
    } else if (!catProdLoaded && !newProdLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <>
                <section className='ProductListPage'>
                    <header>
                        <h2>
                            {listTitle}
                        </h2>
                    </header>
                    
                    {results}
                </section>
            </>
        )
    }
}

ProductListPage.defaultProps = {
    categoryArray: [
        {
            category_class: '',
            english_name: '',
            id: 1
        }
    ],
    productArray: [],
    routeProps: {
        match: {
            params: {
                categoryId: '1'
            }
        }
    },
    setProductArray: () => {}
}

export default ProductListPage