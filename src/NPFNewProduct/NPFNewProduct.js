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
        console.log('props.brandId', props.brandId)
        return brand['id'] === Number(props.brandId)
    }

    const brandDetailArray = props.brandList.filter(findBrandDetails)
    console.log('brandDetailArray', brandDetailArray)

    const brandDetails = brandDetailArray.length > 0 ? brandDetailArray[0] : { english_name: null, home_currency: null }
    console.log('brandDetails', brandDetails)

    const currencyId = brandDetails.home_currency ? Number(brandDetails.home_currency - 1) : 0
    const currencyDetails = currencies[currencyId]

    const changeField = event => {
        props.setNewProductFields({
            ...props.newProductFields, 
            [event.target.name]: event.target.value
        })
    }

    const nextButton = () => {props.setPage(props.currentPage + 1)}

    // const nextButton = event => {
    //     event.preventDefault()
    //     const missingFields = []
         
    //     Object.keys(props.newProductFields).forEach(key => {
    //         if (props.newProductFields[key] === '' || 0) {
    //             missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
    //         }
    //     })
            
    //     if (missingFields.length === 1) {
    //         alert(`Please complete the '${missingFields[0]}' field`)
    //     } else if (missingFields.length > 1) {
    //         alert(`Please complete the following fields: ${missingFields.map(field => `
    //             ${field}`)}
    //         `)
    //     } else if (missingFields.length === 0) {
    //         props.setPage(props.currentPage + 1)
    //     }
    // }

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
                    name='productUrl'
                    prompt='Product URL'
                    currentValue={props.newProductFields.productUrl}
                    handleChange={event => changeField(event)}
                />

                <FormDropdown
                    id='product-category'
                    name='categoryId'
                    prompt='Category'
                    handleChange={event => changeField(event)}
                    currentValue={props.newProductFields.categoryId}
                    options={formData.newProduct.category.options}
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
                    options={formData.newProduct.wash.options}
                />

                <FormDropdown
                    id='dryId'
                    name='dryId'
                    prompt='Drying instructions'
                    handleChange={event => changeField(event)}
                    currentValue={props.newProductFields.dryId}
                    options={formData.newProduct.dry.options}
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