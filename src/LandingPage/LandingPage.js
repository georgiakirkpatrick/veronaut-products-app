import React from 'react'
import Footer from '../Footer/Footer'
import LandingCategoryList from '../LandingCategoryList/LandingCategoryList'
import PrincipleList from '../PrincipleList/PrincipleList'
import EmailSignUp from '../EmailSignUp/EmailSignUp'
import TextBlock from '../TextBlock/TextBlock'
import './LandingPage.css'
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink'

const LandingPage = () => {
    const principles = [
        {
            id: 1,
            title: 'Good design', 
            description: 'Clothing and accessories should be flattering, versatile, functional, and built to last.'
        },
        {
            id: 2,
            title: 'Transparent',
            description: 'Product listings should include information about who, where, and how products are manufactured throughout the supply chain.'
        },
        {
            id: 3,
            title: 'Ethical',
            description: 'Clothing and accessories should be made in workplaces that prioritize employee safety, living wages, and freedom of association (the right to join a union).'
        },
        {
            id: 4,
            title: 'Sustainable',
            description: 'Fashion products should be made with renewable, non-polluting resources whenever possible.  Production should minimize waste.'
        }
    ]

    const categories = [
        {
            id: 5,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Dresses',
            path: 'category=dresses'
        },
        {
            id: 6,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/200602-Amout-Vert_-July-Catalog_13481_web_500x750.jpg?v=1594245275',
            imgAlt: 'Colombe Ribbed Dress in Black',
            name: 'Coats and Jackets',
            path: 'category=lingerie-loungewear-shapewear'
        },
        {
            id: 7,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/200602-Amout-Vert_-July-Catalog_15108_1186x1186.jpg?v=1594243616',
            imgAlt: 'Rene Sweatshirt',
            name: 'Tops',
            path: 'category=tops'
        },
        {
            id: 8,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Pants',
            path: 'category=dresses'
        }
    ]

    const textBlock = (
        <p>
            <span>
                It is tough to be a responsible consumer when it comes to fashion.  
            </span>
            <br />
            <span className='bold'>
                Veronaut helps you make an informed decision.
            </span>
        </p>
    )

    const princReadMore = (
        <ReadMoreLink 
            link='/principles' 
            text='Read more about our principles'
        />
    )
    

    return (
        <>
            <section className='LandingPage'>
                <div className='LandingPage__hero'>
                    <img src='https://cdn.shopify.com/s/files/1/0767/5207/products/KOWTOW_Faculty_Pant_Sand_Canvas_1456_web_1186x1186.jpg?v=1581027100' alt='KowTow Faculty Pant in Sand' />

                    <div className='LandingPage__hero-title'>
                        <header>
                            <h1>
                                Your guide to the best-designed clothes with upstanding supply chains.
                            </h1>
                        </header>
                    </div>
                </div>
                
                <TextBlock text={textBlock} />

                <PrincipleList
                    principles={principles}
                    readMore={princReadMore}
                />

                <LandingCategoryList categories={categories} />

                <EmailSignUp />
            </section>
        </>
    )
}

export default LandingPage;