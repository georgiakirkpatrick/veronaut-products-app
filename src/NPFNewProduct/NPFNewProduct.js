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

const NPFNewProduct = props => {
    const findBrandDetails = brand => {
        return brand['id'] === Number(props.brandId)
    }
    const brandDetailArray = props.brandList.filter(findBrandDetails)
    const brandDetails = brandDetailArray.length > 0 ? brandDetailArray[0] : { english_name: null, home_currency: null }

    const changeField = event => {
        props.setNewProductFields({
            ...props.newProductFields, 
            [event.target.name]: event.target.value
        })
    }

    const currencyId = brandDetails.home_currency ? Number(brandDetails.home_currency - 1) : 0
    const currencyDetails = currencies[currencyId]

    const nextButton = event => {
        event.preventDefault()
        const missingFields = []

        const requiredFields = {
            name: props.newProductFields.name,
            url: props.newProductFields.url,
            categoryId: props.newProductFields.categoryId,
            featureImageUrl: props.newProductFields.featureImageUrl,
            price: props.newProductFields.price,
            washId: props.newProductFields.washId,
            dryId: props.newProductFields.dryId
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
            props.setPage(props.currentPage + 1)
        }
    }

    // const nextButton = () => {props.setPage(props.currentPage + 1)}

    return (
        <div className='NPFNewProduct'>
            <FormPage title='New Product'>
                <FormPromptWithSub
                    prompt={`Brand: ${brandDetails.english_name}`}
                    promptSubtitle=''
                />

                <FormTextInput
                    id='product-name'
                    name='name'
                    prompt='Product name'
                    currentValue={props.newProductFields.name}
                    handleChange={event => changeField(event)}
                />

                <FormUrlInput 
                    id='product-url'
                    name='url'
                    prompt='Product URL'
                    currentValue={props.newProductFields.url}
                    handleChange={event => changeField(event)}
                />

                <FormDropdown
                    id='product-category'
                    name='categoryId'
                    prompt='Category'
                    handleChange={event => changeField(event)}
                    currentValue={props.newProductFields.categoryId}
                    options={formData.productCategories}
                />

                <FormUrlInput
                    id='feature-image-url'
                    name='featureImageUrl'
                    prompt='Feature image URL'
                    currentValue={props.newProductFields.featureImageUrl}
                    handleChange={event => changeField(event)}
                />

                <FormTextInput
                    id='price'
                    name='price'
                    prompt={`Product price in ${currencyDetails.name_plural ? currencyDetails.name_plural : ''} (${currencyDetails.symbol_native ? currencyDetails.symbol_native : ''})`}
                    currentValue={props.newProductFields.price}
                    handleChange={event => changeField(event)}
                />

                <FormDropdown
                    id='washId'
                    name='washId'
                    prompt='Washing instructions'
                    handleChange={event => changeField(event)}
                    currentValue={props.newProductFields.washId}
                    options={formData.washOptions}
                />

                <FormDropdown
                    id='dryId'
                    name='dryId'
                    prompt='Drying instructions'
                    handleChange={event => changeField(event)}
                    currentValue={props.newProductFields.dryId}
                    options={formData.dryOptions}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={event => {nextButton(event)}}
            /> 
        </div>
    )    
}

NPFNewProduct.defaultProps = {
    brandId: 0,
    brandList: [],
    currencies: [],
    currentPage: 0,
    newProductFields: {
        name: '', 
        url: '' ,
        categoryId: 0,
        featureImageUrl: '',
        currency: '',
        price: '',
        wash: '',
        dry: ''
    },
    setNewProductFields: () => {},
    setPage: () => {}
}

export default NPFNewProduct