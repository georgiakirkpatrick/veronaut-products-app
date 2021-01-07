import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './AllCategories.css'

const AllCategories = () => {
    const allCategories = [
        {
            id: 4,
            pathToImage: 'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/avhc13dzwkv0pzgbmf7g.jpg',
            imgAlt: 'alternate text',
            categoryName: 'Dresses',
        }
    ]

    const categoryList = allCategories.map(category => (
        <Category 
            key={category.id}
            id={category.id}
            pathToImage={category.pathToImage}
            imgAlt={category.imgAlt}
            categoryName={category.categoryName}
        />
    ))

    return (
        <Router>
            <Header />
            <section className='AllCategories'>
                <header>
                    <h1>
                        Categories
                    </h1>
                </header>
                
                <ul className='AllCategories__list'>
                    {categoryList}
                </ul>
            </section>
            <Footer />
        </Router> 
    )
}

export default AllCategories