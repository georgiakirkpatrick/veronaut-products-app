import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import data from '../DATA'
import './ProductListPage.css'

const ProductListPage = props => {
  const {
    catArray,
    prodArray,
    routeProps,
    setProdArray
  } = props

  const [catProdError, setCatProdError] = useState(null)
  const [catProdLoaded, setCatProdLoaded] = useState(false)
  const [newProdLoaded, setNewProdLoaded] = useState(false)
  const [newProdError, setNewProdError] = useState(false)

  const categoryId = routeProps.match.params.categoryId

  const listTitle = routeProps.match.path === '/'
    ? 'New products'
    : catArray[categoryId - 1].text

  const getRequestParams = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }

  // The useEffect React Hook synchronizes the App component with veronaut-products-api.
  useEffect(() => {
    // getCats fetches clothing category data from the veronaut-products-api.

    // getProductsForCategory fetches product data for the category designated by "id" from the veronaut-products-api.
    const getCatProds = id => {
      fetch(`${process.env.REACT_APP_API_URL}/api/categories/${id}/product`, getRequestParams)
      .then(response => {
        if (response.ok) {
          setCatProdError(null)

          return response.json()
        } else {
          // If an API error occurs, use data.placeholder.products data for the given category and create an API error message.
          setCatProdError('There was a problem fetching the categories.  Status code: ' + response.status)

          const prods = data.placeholder.products

          const catProds = data.placeholder.products.filter(prod => prod.categoryId === Number(id))

          console.log('prods', prods)

          console.log('catProds', catProds)

          return catProds
        }
      })
      .then(products => {
        setProdArray(products)
        setCatProdLoaded(true)
      },
      err => {
        setCatProdError(err)
        setCatProdLoaded(false)
      })
    }

    const getFeaturedProducts = () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/products/featured`, getRequestParams)
      .then(response => {
        if (response.status >= 400) {
          console.log('There was a problem.  Status code: ' + response.status)
          throw new Error("Server responded with an error!")
        }
      
        return response.json()
      })
      .then(products => {
        setProdArray(products)
        setNewProdLoaded(true)
      },
      err => {
        setNewProdError(err)
        setNewProdLoaded(false)
      })
    }

    if (routeProps.match.params.categoryId) {
      getCatProds(routeProps.match.params.categoryId)
    } else {
      getFeaturedProducts()
    }
  }, [routeProps.match.params.categoryId, setProdArray])

  const makeProductSlug = product => {
    const brandProduct = `${product.brand_name} ${product.english_name}`
    return brandProduct
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .toLowerCase()
  }

  const productList = <ul className='ProductListPage__product-list'>
    {prodArray.map(product => (
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

  const results = prodArray.length === 0
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
  catArray: [
    {
      category_class: '',
      english_name: '',
      id: 1
    }
  ],
  prodArray: [],
  routeProps: {
    match: {
      params: {
        categoryId: '1'
      }
    }
  },
  setProdArray: () => {}
}

export default ProductListPage