import React, { useState } from 'react'
import CatCarousel from '../CatCarousel/CatCarousel'
import EmailSignUp from '../EmailSignUp/EmailSignUp'
import PrincipleList from '../PrincipleList/PrincipleList'
import ProductListPage from '../ProductListPage/ProductListPage'
import './LandingPage.css'

const LandingPage = props => {
    const {
        categoryList,
        routeProps,
    } = props

    const [newProdArray, setNewProdArray] = useState([])

    const principles = [
        {
            id: 1,
            title: 'Sustainability is subjective', 
            description: 'We’re not going to tell you which product to purchase or which brand to boycott.  What makes a garment’s supply chain “sustainable” is not only a complex issue, it also depends on who you ask.  We want to help you make informed decisions by making it as easy as possible to find the facts.',
            symbol: 'leaf'
        },
        {
            id: 2,
            title: 'Product research, but make it shopping',
            description: 'Finding the right clothes to fit your style, budget, and body can be tricky.  Add in your ethical-production standards and it can be downright frustrating to find products that check all the boxes.  That’s why we present product information in a way that feels like online shopping.  We think understanding the socioeconomic and environmental impacts of your purchase should be part of your shopping experience rather than an extra step.',
            symbol: 'tshirt'
        }
    ]

    const testImages = [
        {
            id: 1,
            url: 'https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.97125097125097,x_0.014374514374514,y_0/if_w_gt_2000,c_scale,w_2000/arablu6tfcvzhw7j7c7k.jpg',
            category: 'Activewear',
            slug: 'activewear'
        },
        {
            id: 2,
            url: 'https://n.io.nordstrommedia.com/id/sr3/f7103502-e685-4fce-be64-12fd6388f718.jpeg?trim=color&pad_color=FFF&format=jpeg&w=350&h=536&trimcolor=FFF',
            category: 'Blazers',
            slug: 'blazers'
        },
        {
            id: 3,
            url: 'https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.97125097125097,x_0.014374514374514,y_0/if_w_gt_2000,c_scale,w_2000/arablu6tfcvzhw7j7c7k.jpg',
            category: 'Coats and Jackets',
            slug: 'coats-and-jackets'
        },
        {
            id: 4,
            url: 'https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.97125097125097,x_0.014374514374514,y_0/if_w_gt_2000,c_scale,w_2000/arablu6tfcvzhw7j7c7k.jpg',
            category: 'Dresses',
            slug: 'dresses'
        }
    ]

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
                    
                    <CatCarousel id='category-carousel' images={testImages}/>
                </section>

                <PrincipleList
                    principles={principles}
                />

                <section className='LandingPage__new-products'>
                    <ProductListPage
                        categoryList={categoryList}
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

export default LandingPage