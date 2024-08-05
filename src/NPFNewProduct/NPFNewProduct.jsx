import React from 'react'
import '@fortawesome/react-fontawesome'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import currencies from '../CURRENCIES'
import formData from '../FORM_DATA'

const NPFNewProduct = ({
  brandId = 1,
  brandArray = [],
  currentPage = 1,
  newProductFields = {
    name: '', 
    url: '' ,
    categoryId: 1,
    featureImageUrl: '',
    currency: '',
    price: '',
    wash: '',
    dry: ''
  },
  setNewProductFields = () => {},
  setPage = () => {}
}) => {
  const findBrandDetails = brand => {
    return brand['id'] === Number(brandId)
  }

  const brandDetailArray = brandArray.filter(findBrandDetails)
  const brandDetails = brandDetailArray.length > 0 ? brandDetailArray[0] : { id: 0, text: '', value: 0 }

  const changeField = event => {
    setNewProductFields({
      ...newProductFields, 
      [event.target.name]: event.target.value
    })
  }

  const currencyId = brandDetails.currencyId ? Number(brandDetails.currencyId) : 0
  const currencyDetails = currencies[currencyId - 1]

  const nextButton = event => {
    event.preventDefault()
    const missingFields = []

    const requiredFields = {
      name: newProductFields.name,
      url: newProductFields.url,
      categoryId: newProductFields.categoryId,
      featureImageUrl: newProductFields.featureImageUrl,
      price: newProductFields.price,
      washId: newProductFields.washId,
      dryId: newProductFields.dryId
    }
      
    Object.keys(requiredFields).forEach(key => {
      if (requiredFields[key] === '' || Number(requiredFields[key]) === 0) {
          missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
      }
    })
        
    if (missingFields.length === 1) {
      alert(`Please complete the '${missingFields[0]}' field`)
    } else if (missingFields.length > 1) {
      alert(`Please complete the following fields: ${missingFields.map(field => `
          ${field}`)}
      `)
    } else if (missingFields.length === 0) {
      setPage(currentPage + 1)
    }
  }

  return (
    <div className='NPFNewProduct'>
      <FormPage title='New Product'>
        <FormPromptWithSub
          prompt={`Brand: ${brandDetails.text}`}
          promptSubtitle=''
        />

        <FormTextInput
          id='product-name'
          name='name'
          prompt='Product name'
          currentValue={newProductFields.name}
          handleChange={event => changeField(event)}
        />

        <FormUrlInput 
          id='product-url'
          name='url'
          prompt='Product URL'
          currentValue={newProductFields.url}
          handleChange={event => changeField(event)}
        />

        <FormDropdown
          id='product-category'
          name='categoryId'
          prompt='Category'
          handleChange={event => changeField(event)}
          currentValue={newProductFields.categoryId}
          options={formData.productCategories}
        />

        <FormUrlInput
          id='feature-image-url'
          name='featureImageUrl'
          prompt='Feature image URL'
          currentValue={newProductFields.featureImageUrl}
          handleChange={event => changeField(event)}
        />

        <FormTextInput
          id='price'
          name='price'
          prompt={`Product price in ${currencyDetails ? currencyDetails.name_plural : ''} (${currencyDetails ? currencyDetails.symbol_native : ''})`}
          currentValue={newProductFields.price}
          handleChange={event => changeField(event)}
        />

        <FormDropdown
          id='washId'
          name='washId'
          prompt='Washing instructions'
          handleChange={event => changeField(event)}
          currentValue={newProductFields.washId}
          options={formData.washOptions}
        />

        <FormDropdown
          id='dryId'
          name='dryId'
          prompt='Drying instructions'
          handleChange={event => changeField(event)}
          currentValue={newProductFields.dryId}
          options={formData.dryOptions}
        />
      </FormPage>

      <NPFFooter 
        buttons='prevNext' 
        previousButton={() => setPage(currentPage - 1)} 
        nextButton={event => {nextButton(event)}}
      /> 
    </div>
  )    
}

export default NPFNewProduct