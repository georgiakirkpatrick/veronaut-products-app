import React from 'react'
import PrincipleList from '../PrincipleList/PrincipleList'
import LandingCategoryList from '../LandingCategoryList/LandingCategoryList'
import LandingBrandList from '../LandingBrandList/LandingBrandList'
import EmailSignUp from '../EmailSignUp/EmailSignUp'
import './LandingPage.css'

function LandingPage() {
    const principles = [
        {
            id: 1821,
            title: 'Good design', 
            description: 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.'
        },
        {
            id: 1822,
            title: 'Ethical',
            description: 'We report which brands have the most transparent supply chains, and which brands prioritize worker safety, living wages, and freedom of association (the right to join a union).'
        },
        {
            id: 1823,
            title: 'Sustainable',
            description: 'We feature clothing made with natural and cellulose-based fibers, with exceptions for a few categories like outerwear and swimwear.  While we include thoughtfully-sourced wool products, we exclude leather and fur.'
        }
    ]

    const categories = [
        {
            id: 1859,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Dresses',
            path: 'category=dresses'
        },
        {
            id: 1860,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/200602-Amout-Vert_-July-Catalog_13481_web_500x750.jpg?v=1594245275',
            imgAlt: 'Colombe Ribbed Dress in Black',
            name: 'Lingerie, Loungewear, and Shapewear',
            path: 'category=lingerie-loungewear-shapewear'
        },
        {
            id: 1861,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/200602-Amout-Vert_-July-Catalog_15108_1186x1186.jpg?v=1594243616',
            imgAlt: 'Rene Sweatshirt',
            name: 'Tops',
            path: 'category=tops'
        }
    ]

    const brands = [
        {
            id: 6860598,
            pathToImage: 'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_1.0,f_auto,q_auto,w_auto:100:1200/v1/i/1bc014ee_3f92.jpg',
            imgAlt: `A 5'10" model is wearing a size 2 The Relaxed Air Shirt in Blue / White Stripe`,
            brandName: 'Everlane',
            brandLink: 'www.google.com'
        }
    ]

    return (
        <section className='LandingPage'>
            <div className='LandingPage__hero'>
                <img src='https://cdn.shopify.com/s/files/1/0767/5207/products/KOWTOW_Faculty_Pant_Sand_Canvas_1456_web_1186x1186.jpg?v=1581027100' alt='KowTow Faculty Pant in Sand' />

                <div className='LandingPage__hero-title'>
                    <header>
                        <h1>
                            Your guide to the best-designed clothes with upstanding supply chains.
                        </h1>
                    </header>

                    <button>
                        Our Principles
                    </button>
                </div>
            </div>
            

            <PrincipleList principles={principles} />

            <LandingCategoryList categories={categories} />

            <LandingBrandList brands={brands}/>

            <EmailSignUp />
        </section> 
    )
}

export default LandingPage;