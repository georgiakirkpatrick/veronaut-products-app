import React from 'react'
import '@fortawesome/react-fontawesome'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPage from '../FormPage/FormPage'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter';
import formData from '../FORM_DATA'

const NPFNewProduct = props => {
    const newProductChange = event => {
        props.setNewProductFields({...props.newProductFields, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <FormPage title={formData.newProduct.pageTitle}>
                <FormTextInput
                    id='product-name'
                    name='productName'
                    prompt='Product name'
                    currentValue={props.newProductFields.productName}
                    handleChange={event => newProductChange(event)}
                />

                <FormUrlInput 
                    id='product-url'
                    name='productUrl'
                    prompt='Product URL'
                    currentValue={props.newProductFields.productUrl}
                    handleChange={event => newProductChange(event)}
                />

                <FormDropdown
                    id='product-category'
                    name='productCategory'
                    prompt='Category'
                    handleChange={event => newProductChange(event)}
                    currentValue={props.newProductFields.productCategory}
                    options={formData.newProduct.productCategory.options}
                />

                <FormUrlInput
                    id='feature-image-url'
                    name='featureImageUrl'
                    prompt={formData.newProduct.featureImageUrl.prompt}
                    currentValue={props.newProductFields.featureImageUrl}
                    handleChange={event => newProductChange(event)}
                />

                <FormPromptWithSub 
                    prompt={formData.newProduct.productCurrency.prompt}
                    promptSubtitle={formData.newProduct.productCurrency.promptSubtitle}
                />

                <FormDropdown
                    id='product-currency'
                    name='productCurrency'
                    prompt={formData.newProduct.productCurrency.prompt}
                    handleChange={event => newProductChange(event)}
                    currentValue={props.newProductFields.productCurrency}
                    options={props.currencies}
                />

                <FormTextInput
                    id='price'
                    name='price'
                    prompt={formData.newProduct.price.prompt}
                    currentValue={props.newProductFields.price}
                    handleChange={event => newProductChange(event)}
                />

                <FormPromptWithSub 
                    prompt={formData.newProduct.careInstructions.prompt}
                    promptSubtitle=''
                />

                <FormDropdown
                    id='wash'
                    name='wash'
                    prompt={formData.newProduct.wash.prompt}
                    handleChange={event => newProductChange(event)}
                    currentValue={props.newProductFields.wash}
                    options={formData.newProduct.wash.options}
                />

                <FormDropdown
                    id='dry'
                    name='dry'
                    prompt={formData.newProduct.dry.prompt}
                    handleChange={event => newProductChange(event)}
                    currentValue={props.newProductFields.dry}
                    options={formData.newProduct.dry.options}
                />
            </FormPage>
            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={() => props.setPage(props.currentPage + 1)}
            /> 
        </div>
    )    
}

NPFNewProduct.defaultProps = {
    currencies: [],
    currentPage: 0,
    newProductFields: {
        productName: '', 
        productUrl: '' ,
        category: '',
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