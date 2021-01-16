import React from 'react'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './AllCategories.css'

const AllCategories = props => {
    const categoryList = props.allCategories.map(category => (
        <Category
            key={category.id}
            id={category.id}
            // pathToImage={category.pathToImage}
            imgAlt={category.english_name}
            categoryName={category.english_name}
        />
    ))

    console.log('props.allCategories', props.allCategories)

    return (
        <>
            <Header allCategories={props.allCategories}/>
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
        </>
    )
}

export default AllCategories