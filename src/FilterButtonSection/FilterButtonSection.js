import React from 'react'
import './FilterButtonSection.css'

function FilterButtonSection(props) {
    const generateTags = props.selectedFilterOptions.map(option => (
        <li key={option.id} className='FilterButtonSection__tag'>
            {option.name}
        </li>
    ))
            
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