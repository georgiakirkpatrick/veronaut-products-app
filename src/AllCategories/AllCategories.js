import React from 'react'
import Category from '../Category/Category'
import './AllCategories.css'

const AllCategories = props => {
    const categoryList = props.categoryList.map(category => (
        <Category
            key={category.id}
            id={category.id}
            imgAlt={category.english_name}
            categoryName={category.english_name}
        />
    ))

    return (
        <>
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
        </>
    )
}

export default AllCategories