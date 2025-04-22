import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = ({
  categoryName = "",
  id = 1
}) => {
  const makeCategorySlug = () => {
    const category = categoryName
    return category
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .toLowerCase()
  }

  const slug = makeCategorySlug()

  return (
    <li className='Category' key={id}>
      <Link to={`/category/${id}/${slug}`} className='main-link'>
        <h2 className='Category__title'>{categoryName}</h2>
      </Link>
    </li>
  )
}

export default Category