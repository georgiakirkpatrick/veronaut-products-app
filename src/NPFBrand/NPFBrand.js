import React from 'react'
import config from '../config.js'
import FormButton from '../FormButton/FormButton'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import sizeData from '../SIZES'

const NPFBrand = props => {
    const { 
        brandArray,
        brandPopUp,
        currencies,
        currentBrandId,
        currentPage,
        formatName,
        formatUrl,
        newBrandFields,
        newProductFields,
        pageTurns,
        setBrandArray,
        setBrandPopUp,
        setCurrentBrandId,
        setNewBrandFields,
        setNewProductFields,
        setPage
    } = props


    const addBrand = brand => {
        const newBrandArray = [
            ...brandArray,
            {
                id: brand.id,
                text: brand.english_name,
                currencyId: Number(brand.home_currency),
                sizeSystemId: Number(brand.size_system),
                value: brand.id
            }
        ]

        setBrandArray(newBrandArray)
        setCurrentBrandId(brand.id)
    }

    const changeFields = event => {
        const values = {...newBrandFields}
        values[event.target.name] = event.target.value
        setNewBrandFields(values)
    }

    const handleBrandPopClose = () => {
        setBrandPopUp(false)
    }

    const handleBrandPopSubmit = () => {
        const missingFields = []

        Object.keys(newBrandFields).forEach(key => {
            !newBrandFields[key] && missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            submitNewBrand()

            setNewBrandFields({
                name: '',
                website: '',
                currencyId: 0,
                sizeSystemId: 0
            })

            handleBrandPopClose()
        }
    }

    const makeBrandOptions = () => {
        const brands = brandArray.sort((a, b) => 
            a.text > b.text ? 1 : -1
        )
        
        return [
            {
                id: 0,
                text: "Select a brand",
                value: 0,
                currencyId: 0,
                sizeSystemId: 0
            },
            ...brands
        ]
    }

    const makeCurrencyOptions = () => {
        const defaultOption = {
            id: 0,
            text: 'Select a currency',
            value: 0
        }

        return [
            defaultOption,
            ...currencies
        ]
    }

    const makeSizeSystemOptions = () => {
        const defaultOption = {
            id: 0,
            text: 'Select a sizing system',
            value: 0
        }
        
        const sizeSystems = sizeData.systems.map(system => ({
            id: system.id,
            text: system.text,
            value: system.value
        }))

        return [
            defaultOption,
            ...sizeSystems
        ]
    }

    const newBrandPopUp = () => {
        if (brandPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const submitNewBrand = () => {
        const data = {
            "english_name": formatName(newBrandFields.name),
            "home_currency": newBrandFields.currencyId,
            "size_system": Number(newBrandFields.sizeSystemId),
            "website": formatUrl(newBrandFields.website),
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/brands`, postRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                
                return response.json()
            })
            .then(responseJson => {
                addBrand(responseJson)
            })
    }

    const nextButton = () => {
        if (currentBrandId === 0) {
            alert('Please select a brand.')
        } else if (currentBrandId > 0) {
            setPage(currentPage + 1)
        }
    }

    return (
        <div id='NPFBrand' className='relative'>
            <FormPage title='Brand'>
                <FormDropdown
                    id='brand'
                    name='brand'
                    prompt='Which brand made this product?'
                    options={makeBrandOptions()}
                    currentValue={currentBrandId}
                    handleChange={event => {
                        setCurrentBrandId(Number(event.target.value))
                        setNewProductFields({
                            ...newProductFields,
                            currencyId: brandArray[0].home_currency
                        })
                    }}
                />

                <FormPromptWithSub
                    prompt='Brand not listed above?'
                    promptSubtitle=''
                />

                <FormButton
                    buttonText='Add a brand'
                    handleClick={() => setBrandPopUp(true)} 
                    type='button'
                />

                <NPFFooter
                    buttons='prevNext'
                    previousButton={() => setPage(currentPage - pageTurns)} 
                    nextButton={event => {nextButton(event)}}
                    nextType='button'
                />
            </FormPage>

            <FormPopUp
                id='add-brand'
                status={newBrandPopUp()}
                title='New Brand'
                close={() => handleBrandPopClose()}
                submit={() => handleBrandPopSubmit()}
                buttonText='CREATE BRAND'
                buttonType='submit'
            >
                <FormPromptWithSub
                    prompt='Enter the following details to add a brand.'
                />

                <FormTextInput
                    id='brandName'
                    name='name'
                    prompt='Brand name'
                    currentValue={newBrandFields['name']} 
                    handleChange={event => changeFields(event)}
                />

                <FormUrlInput 
                    id='brandWebsite'
                    name='website'
                    prompt='Brand website'
                    currentValue={newBrandFields['website']} 
                    handleChange={event => changeFields(event)}
                />

                <FormDropdown
                    id='brandCurrency'
                    name='currencyId'
                    prompt='Which currency does the brand list prices in?'
                    subprompt="If the brand offers multiple currency options on their website, select US dollars if available.  Otherwise, select the main currency of the brand's home country.  Not sure?  Select 'Not sure' from the dropdown."
                    currentValue={newBrandFields['currencyId']} 
                    handleChange={event => changeFields(event)}
                    options={makeCurrencyOptions()}
                />

                <FormDropdown
                    id='brandSizeSystem'
                    name='sizeSystemId'
                    prompt='Which sizing system does the brand use?'
                    subprompt="If the brand offers multiple size systems on their website based on the country in which the webpage is being viewed, select US sizes if available.  Otherwise, select the main size system of the brand's home country. Not sure?  Select 'Not sure' from the dropdown."
                    currentValue={newBrandFields['sizeSystemId']} 
                    handleChange={event => changeFields(event)}
                    options={makeSizeSystemOptions()}
                />
            </FormPopUp>
        </div>
    )
}

NPFBrand.defaultProps = {
    brandArray: [],
    brandPopUp: false,
    currencies: [],
    currentBrandId: 0,
    currentPage: 0,
    formatName: () => {},
    formatUrl: () => {},
    newBrandFields: {
        name: '',
        website: '',
        currencyId: 0,
        sizeSystemId: 0
    },
    newProductFields: {},
    pageTurns: 0,
    setBrandArray: () => {},
    setBrandPopUp: () => {},
    setCurrentBrandId: () => {},
    setNewBrandFields: () => {},
    setNewProductFields: () => {},
    setPage: () => {}
}

export default NPFBrand