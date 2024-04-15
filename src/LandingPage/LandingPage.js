import React, { useState } from 'react'
import CatCarousel from '../CatCarousel/CatCarousel'
import EmailSignUp from '../EmailSignUp/EmailSignUp'
import PrincipleList from '../PrincipleList/PrincipleList'
import ProductListPage from '../ProductListPage/ProductListPage'
import './LandingPage.css'

const LandingPage = props => {
    const {
        categoryArray,
        principles,
        routeProps,
    } = props
    
    const [newProdArray, setNewProdArray] = useState([])

    // const principles = [
    //     {
    //         id: 1,
    //         title: 'Sustainability is subjective', 
    //         description: 'We’re not going to tell you which product to purchase or which brand to boycott.  What makes a garment’s supply chain “sustainable” is not only a complex issue, it also depends on who you ask.  We want to help you make informed decisions by making it as easy as possible to find the facts.',
    //         symbol: 'leaf'
    //     },
    //     {
    //         id: 2,
    //         title: 'Product research, but make it shopping',
    //         description: 'Finding the right clothes to fit your style, budget, and body can be tricky.  Add in your ethical-production standards and it can be downright frustrating to find products that check all the boxes.  That’s why we present product information in a way that feels like online shopping.  We think understanding the socioeconomic and environmental impacts of your purchase should be part of your shopping experience rather than an extra step.',
    //         symbol: 'tshirt'
    //     }
    // ]

    const makeCategorySlug = cat => (
        cat.text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-')
            .toLowerCase()
    )

    const catImages = categoryArray.map(cat => (
        {
            id: cat.id,
            category: cat.text,
            class: cat.category_class,
            slug: makeCategorySlug(cat),
            url: cat.featureImage
        }
    ))

    return (
        <section className='LandingPage'>
            <div className='LandingPage__hero'>
                <section className='LandingPage__hero-title'>
                    <header>
                        <h1>
                            <span className='fashion'>TRUTH </span>
                            <br></br>
                            <span className='fashion'>IS IN FASHION</span>
                        </h1>
                    </header>

                    <p className='subhero'>
                        <span className='subero1'>We're here to help you</span>
                        <br></br>
                        <span className='subero2'>find it</span>
                    </p>
                </section>
            </div>
                
            <div className='LandingPage__body'>
                <section className='LandingPage__categories'>
                    <header>
                        <h2>Categories</h2>
                    </header>
                    
                    <CatCarousel id='category-carousel' images={catImages}/>
                </section>

                <PrincipleList
                    principles={principles}
                />

                <section className='LandingPage__new-products'>
                    <ProductListPage
                        categoryArray={categoryArray}
                        productArray={newProdArray}
                        routeProps={routeProps}
                        setProductArray={setNewProdArray}
                    />
                </section>
            </div>

            <EmailSignUp />
        </section>
    )
}

LandingPage.defaultProps = {
    categoryArray: [
        {
            id: 0,
            text: '',
            value: 0,
            class: '',
            featureImage: ''
        }
    ],
    routeProps: {
        match: {
            params: {
                categoryId: '1'
            }
        }
    },
}

export default LandingPage