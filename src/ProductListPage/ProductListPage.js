import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import config from '../config'
import './ProductListPage.css'

const ProductListPage = props => {
    const {
        categoryList,
        // catProdError,
        // catProdLoaded,
        productArray,
        routeProps,
        setProductArray,
        // selectedCategoryId,
        // setSelectedCategoryId
    } = props

    const [catProdError, setCatProdError] = useState(null)
    const [catProdLoaded, setCatProdLoaded] = useState(false)

    useEffect(() => {
        // setSelectedCategoryId(routeProps.match.params.categoryId)


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
          .then(products => {
              setProductArray(products)
              setCatProdLoaded(true)
          },
          err => {
              setCatProdError(err)
              setCatProdLoaded(false)
          })
        }
        getProductsForCategory(routeProps.match.params.categoryId)
      }, [routeProps.match.params.categoryId, setProductArray])

    const makeProductSlug = product => {
        const brandProduct = `${product.brand_name} ${product.english_name}`
        return brandProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    const productList = <ul className='ProductArrayPage__product-list'>
        {productArray.map(product => (
            <Product
                key={product.id}
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
        ))}
    </ul>

    const results = productArray.length === 0
        ? <div className='ProductListPage__no-products'>
            <p>Sorry, there are not any products in this category yet.</p>
        </div>
        : productList     
        
    if (catProdError) {
        return <div> {catProdError.message} </div>
    } else if (!catProdLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <>
                <section className='ProductListPage'>
                    <header>
                        <h1>
                            {categoryList[routeProps.match.params.categoryId - 1].english_name}
                        </h1>
                    </header>
                    
                    {results}
                </section>
            </>
        )
    }

}

ProductListPage.defaultProps = {
    categoryList: [],
    catProdError: null,
    catProdLoaded: false,
    productArray: [],    
    routeProps: {
        match: {
            params: {
                categoryId: '4'
            }
        }
    }
    // selectedCategoryId: 1,
    // setSelectedCategoryId: () => {}
}

export default ProductListPage