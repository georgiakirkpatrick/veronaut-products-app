import React from 'react'
import './FilterButtonSection.css'

const FilterButtonSection = ({
  defaultFilter = 1,
  selectedFilters = [],
  selectedFilterOptions = []
}) => {

  const tagsNoFiltersSelected = <li key={defaultFilter} className='FilterButtonSection__tag'>
    {defaultFilter}
  </li>

  const tagsWithFiltersSelected = selectedFilters.map(filter => (
    <li key={filter.id} className='FilterButtonSection__tag'>
      {filter.name}
    </li>
  ))

  const generateTags = selectedFilterOptions.length === 0
    ? tagsNoFiltersSelected
    : tagsWithFiltersSelected
          
  return (
    <div className='FilterButtonSection'>
      <div className='FilterButtonSection__button-section'>
        <button>Filter</button>
        <button>Sort</button>
      </div>

      <ul className='FilterButtonSection__tag-section'>
        {generateTags}
      </ul>
    </div>
  )
}

export default FilterButtonSection