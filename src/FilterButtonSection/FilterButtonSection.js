import React from 'react'
import './FilterButtonSection.css'

const FilterButtonSection = props => {

    const tagsNoFiltersSelected = <li key={props.defaultFilter} className='FilterButtonSection__tag'>
        {props.defaultFilter}
    </li>

    const tagsWithFiltersSelected = props.selectedFilters.map(filter => (
        <li key={filter.id} className='FilterButtonSection__tag'>
            {filter.name}
        </li>
    ))

    const generateTags = props.selectedFilterOptions.length === 0
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

FilterButtonSection.defaultProps = {
    selectedFilterOptions: []
}

export default FilterButtonSection