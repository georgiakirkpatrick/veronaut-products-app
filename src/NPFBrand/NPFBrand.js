import React from 'react'
import FormButton from '../FormButton/FormButton'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import sizes from '../SIZES'

const NPFBrand = props => {
    const newBrandPopUp = () => {
        if (props.brandPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const makeBrandOptions = () => {
        const defaultOption = {
            id: 'blank-brand',
            text: 'Select a brand'
        }
        
        const brands = props.brands.map(brand => ({
            id: brand.id,
            text: brand.english_name
        }))

        return [
            defaultOption,
            ...brands
        ]
    }

    const changeBrandFields = event => {
        const values = {...props.newBrandFields}
        values[event.target.name] = event.target.value
        props.setNewBrandFields(values)
    }

    const handleBrandPopClose = () => {
        props.setBrandPopUp(false)
    }

    const createBrand = () => {}

    const handleBrandPopSubmit = () => {
        createBrand()

        handleBrandPopClose()
    }

    return (
        <div id='NPFBrand'>
            <FormPage title='Brand'>
                <FormDropdown 
                    currentBrandId={props.currentBrandId}
                    handleChange={(event) => {
                        props.setCurrentBrandId(event.currentTarget.id)
                    }}
                    id='brand'
                    name='brand'
                    prompt='Which brand made this product?'
                    options={makeBrandOptions()}
                />
                <FormPromptWithSub
                    prompt='Brand not listed above?'
                    promptSubtitle=''
                />
                <FormButton
                    buttonText='ADD A BRAND' 
                    handleClick={() => props.setBrandPopUp(true)} 
                    type='button'
                />
                <FormPopUp 
                    id='add-brand'
                    status={newBrandPopUp()}
                    title='New Brand'
                    close={() => handleBrandPopClose()}
                    submit={() => handleBrandPopSubmit()}
                    buttonText='CREATE BRAND'
                >
                    <FormPromptWithSub
                        prompt='Enter the following details to add a brand.'
                    />
                    <FormTextInput
                        id='brandName'
                        name='brandName'
                        prompt='Brand name'
                        currentValue={props.newBrandFields['brandName']} 
                        handleChange={event => changeBrandFields(event)}
                    />
                    <FormUrlInput 
                        id='brandWebsite'
                        name='brandWebsite'
                        prompt='Brand website'
                        currentValue={props.newBrandFields['brandWebsite']} 
                        handleChange={event => changeBrandFields(event)}
                    />
                    <FormDropdown
                        id='brandCurrency'
                        name='brandCurrency'
                        prompt='Which currency does the brand list prices in?'
                        currentValue={props.newBrandFields['randCurrency']} 
                        handleChange={event => changeBrandFields(event)}
                        options={props.currencies}
                    />
                    <FormDropdown
                        id='brandSizeSystem'
                        name='brandSizeSystem'
                        prompt='Which sizing system does the brand use?'
                        currentValue={props.newBrandFields['brandSizeSystem']} 
                        handleChange={event => changeBrandFields(event)}
                        options={sizes.systems}
                    />
                </FormPopUp>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )
}

NPFBrand.defaultProps = {
    currentBrandId: 0,
    setCurrentBrandId: () => {},
    newBrandFields: {
        brandName: '',
        brandWebsite: '',
        brandCurrency: '',
        brandSizeSystem: ''
    },
    setNewBrandFields: () => {},
    brands: [],
    setBrands: () => {},
    brandPopUp: false,
    setBrandPopUp: () => {},
    currentPage: 0,
    setBrandId: () => {},
    setPage: () => {},
    currencies: []
}

export default NPFBrand