import React, { useState } from 'react'
import FormButton from '../FormButton/FormButton'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import formData from '../FORM_DATA'
import sizes from '../SIZES'
import './NPFBrand.css'

const fetchBrandOptions = () => {
    return fetch('http://localhost:8000/api/brands/', {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => {
            if (response.status !== 200) {
                console.log('There was a problem. Status code: ' + response.status)
            }
            return response.json()
        })
}

const NPFBrand = props => {
    // Populate 'brands' state with brands from API
    React.useEffect(() => {
        fetchBrandOptions()
            .then(responseJson => {  
                console.log('fetchBrandOptions resopnseJson', responseJson)
      
                props.setBrands(responseJson)
        })},  
    [])

    // Create brand options in form dropdown
    const makeBrandOptions = () => {
        const defaultOption = {
            id: 'blank-brand',
            text: 'Select a brand'
        }
        
        const brandsFromApi = props.brands.map(brand => ({
            id: brand.id,
            text: brand.english_name
        }))

        return [
            defaultOption,
            ...brandsFromApi
        ]
    }

    const popUpStatus = () => {
        console.log('props.brandPopUp', props.brandPopUp)
        if (props.brandPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    // Update fields of new brand pop-up form
    const changeBrandFields = event => {
        console.log('event.target.name', event.target.name)
        const values = {...props.newBrandFields}
        values[event.target.name] = event.target.value
        props.setNewBrandFields(values)
    }

    const handleBrandPopClose = () => {
        props.setBrandPopUp(false)
    }

    const createBrand = stringifiedBrand => {
        console.log('stringifiedBrand', stringifiedBrand)
        fetch('http://localhost:8000/api/brands/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringifiedBrand
        }).then(response => {
            if (response.status !== 201) {
                console.log('There was a problem. Status code: ' + response.status)
            }
            return response.json()
        }).then(responseJson => {
            console.log('responseJson', responseJson)
            return responseJson
        }).then(response => {
            console.log(response)
            props.addBrand(response)
        })
    }

    const handleBrandPopSubmit = () => {
        const brand = {
            english_name: props.newBrandFields['brandName'],
            "website": props.newBrandFields.brandWebsite,
            "home_currency": props.newBrandFields.brandCurrency,
            "size_system": props.newBrandFields.brandSizeSystem,
            "approved_by_admin": false
        }

        console.log('brand', brand)
        const stringifiedBrand = JSON.stringify(brand)

        createBrand(stringifiedBrand)

        handleBrandPopClose()
    }

    return (
        <div id='NPFBrand'>
            <FormPage title='Brand'>
                <FormDropdown 
                    currentBrandId={props.currentBrandId}
                    change={(event) => {
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
                    click={() => props.setBrandPopUp(true)} 
                    type='button'
                />
                <FormPopUp 
                    id='add-brand'
                    status={popUpStatus()}
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
                        value={props.newBrandFields['brandName']} 
                        change={event => changeBrandFields(event)}
                    />
                    <FormUrlInput 
                        id='brandWebsite'
                        name='brandWebsite'
                        prompt='Brand website'
                        value={props.newBrandFields['brandWebsite']} 
                        change={event => changeBrandFields(event)}
                    />
                    <FormDropdown
                        id='brandCurrency'
                        name='brandCurrency'
                        prompt='Which currency does the brand list prices in?'
                        value={props.newBrandFields['randCurrency']} 
                        change={event => changeBrandFields(event)}
                        options={props.currencies}
                    />
                    <FormDropdown
                        id='brandSizeSystem'
                        name='brandSizeSystem'
                        prompt='Which sizing system does the brand use?'
                        value={props.newBrandFields['brandSizeSystem']} 
                        change={event => changeBrandFields(event)}
                        options={sizes.systems}
                    />
                </FormPopUp>
            </FormPage>
            <NPFFooter buttons='prevNext' previousButton={() => props.setPage(props.currentPage - 1)} nextButton={() => props.setPage(props.currentPage + 1)} />
        </div>
    )
}

export default NPFBrand