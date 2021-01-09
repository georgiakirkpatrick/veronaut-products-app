import React from 'react'
import LandingCategoryList from '../LandingCategoryList/LandingCategoryList'
import PrincipleList from '../PrincipleList/PrincipleList'
import EmailSignUp from '../EmailSignUp/EmailSignUp'
import TextBlock from '../TextBlock/TextBlock'
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink'
import './LandingPage.css'

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
            key: 1,
            id: 4,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Dresses',
            slug: 'dresses'
        },
        {
            key: 2,
            id: 4,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Dresses',
            slug: 'dresses'
        },
        {
            key: 3,
            id: 4,
            picPath: 'https://cdn.shopify.com/s/files/1/0767/5207/products/9754_Analina_Blue_Depths_3480_web_1186x1186.jpg?v=1580429686',
            imgAlt: 'Analina Shirt Dress in Blue Depths',
            name: 'Dresses',
            slug: 'dresses'
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
        <section className='LandingPage'>
            <div className='LandingPage__hero'>
                <img 
                    src='https://cdn.shopify.com/s/files/1/0767/5207/products/KOWTOW_Faculty_Pant_Sand_Canvas_1456_web_1186x1186.jpg?v=1581027100' 
                    alt='KowTow Faculty Pant in Sand' 
                />

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
    )
}

export default LandingPage