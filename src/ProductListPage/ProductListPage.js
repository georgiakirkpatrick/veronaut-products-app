import React from 'react'
import Product from '../Product/Product'
// import FilterButtonSection from '../FilterButtonSection/FilterButtonSection'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import data from '../DATA'
import './ProductListPage.css'
// { useState }

const ProductListPage = props => {
    // selectedFilters is updated when filters are added by the user.
    // const [selectedFilters, setSelectedFilters] = useState([])    
    // const handleFilterSubmit = submittedFilters => setSelectedFilters([...selectedFilters, ...submittedFilters])

    // selectedCategoryId is defined by the Route path.
    const selectedCategoryId = Number(props.routeProps.match.params.categoryId)

    const categoryInfo = data.categories.find(category => 
        category.id === selectedCategoryId
    )

    const productsForSelectedCategory = data.productList.filter(product =>
        product.categoryId === selectedCategoryId
    )

    const makeProductSlug = p => {
        const brandProduct = `${p.brand} ${p.productTitle}`
        return brandProduct
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    }

    const generateProductList = productsForSelectedCategory.map(product => (
        <Product 
            key={product.id} 
            id={product.id} 
            pathToImg={product.pathToImg} 
            imgAlt={product.imgAlt} 
            brand={product.brand} 
            productTitle={product.productTitle} 
            price={product.price}
            productSlug={makeProductSlug(product)}
            routeProps={props.routeProps}
        />
    ))

    const results = productsForSelectedCategory.length === 0
        ? <div className='ProductListPage__no-products'>
            <p>Sorry, there are not any products in this category yet.</p>
        </div>
        : generateProductList

    return (
        <>
            <Header />
            <section className='ProductListPage'>
                <header>
                    <h1>
                        {categoryInfo.engName}
                    </h1>
                </header>

                {/* <FilterButtonSection defaultFilter={selectedCategoryId} selectedFilters={data.selectedFilterOptions}/> */}
                
                <ul className='ProductListPage__product-list'>
                    {results}
                </ul>
            </section>
            <Footer />
        </>    
    )
}

ProductListPage.defaultProps = {
    products: []
}

export default ProductListPage