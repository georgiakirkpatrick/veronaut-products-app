import React from 'react'
import Category from '../Category/Category'
import './AllCategories.css'

const AllCategories = ({
  catArray = []
}) => {

  const categories = catArray.map(category => (
    <Category
      key={category.id}
      id={category.id}
      imgAlt={category.text}
      categoryName={category.text}
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
          {categories}
        </ul>
      </section>
    </>
  )
}

export default AllCategories