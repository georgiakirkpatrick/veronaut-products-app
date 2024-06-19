import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFSizes.css'
import sizeData from '../SIZES'

const NPFSizes = props => {
  const {
    currentPage,
    selectedSizeOptions,
    setPage,
    setSelectedSizeOptions,
    sizeSystem
  } = props

  const maternityOptions = [
    ...sizeData.women.alpha.maternity.map(size => (
      {
        id: size.id,
        text: size.text
      }
    )),
    ...Object.values(sizeData.women.dress.maternity).map((size, index) => (
      {
        id: size[sizeSystem].id,
        text: size[sizeSystem].text
      }
    ))
  ]

  const nextButton = () => {
    setPage(currentPage + 1)
  }

  const petiteOptions = [
    ...sizeData.women.alpha.petite.map(size => (
      {
          id: size.id,
          text: size.text
      }
    )),
    ...Object.values(sizeData.women.dress.petite).map((size, index) => (
      {
          id: size[sizeSystem].id,
          text: size[sizeSystem].text
      }
    ))
  ]

  const sizeChange = event => {
    setSelectedSizeOptions(
      {
        ...selectedSizeOptions,
        [event.target.id]: !selectedSizeOptions[event.target.id]
      }
    )
  }

  const standardOptions = [
    ...sizeData.women.alpha.standard.map(size => (
      {
        id: size.id,
        text: size.text
      }
    )),
    ...Object.values(sizeData.women.dress.standard).map((size, index) => (
      {
        id: size[sizeSystem].id,
        text: size[sizeSystem].text
      }
    ))
  ]

  const systemName = sizeData.systems.filter(system => system.id === sizeSystem)[0].text

  const tallOptions = [
    ...sizeData.women.alpha.tall.map(size => (
      {
        id: size.id,
        text: size.text
      }
    )),
    ...Object.values(sizeData.women.dress.tall).map((size, index) => (
      {
        id: size[sizeSystem].id,
        text: size[sizeSystem].text
      }
    ))
  ]

  return (
    <div className='NPFSizes'>
      <FormPage title='Sizes'>
          <FormPromptWithSub 
              prompt='Select all size options available on this product page'
              promptSubtitle='Include sold out sizes'
          />

          <FormCheckboxSection 
              prompt={`Standard ${systemName} sizing`}
              options={standardOptions}
              selectedOptions={selectedSizeOptions}
              handleChange={event => sizeChange(event)}
          />

          <FormCheckboxSection 
              prompt={`Petite ${systemName} sizing`} 
              options={petiteOptions}
              selectedOptions={selectedSizeOptions}
              handleChange={event => sizeChange(event)}
          />

          <FormCheckboxSection 
              prompt={`Tall ${systemName} sizing`} 
              options={tallOptions}
              selectedOptions={selectedSizeOptions}
              handleChange={event => sizeChange(event)}
          />

          <FormCheckboxSection 
              prompt={`Maternity ${systemName} sizing`} 
              options={maternityOptions}
              selectedOptions={selectedSizeOptions}
              handleChange={event => sizeChange(event)}
          />
      </FormPage>

      <NPFFooter 
        buttons='prevNext' 
        previousButton={() => setPage(currentPage - 1)}
        nextButton={() => nextButton()} 
      />
    </div>
  )
}

NPFSizes.defaultProps = {
  currentPage: 0,
  selectedSizeOptions: [],
  setPage: () => {},
  setSelectedSizeOptions: () => {},
  sizeSystem: 1
}    

export default NPFSizes