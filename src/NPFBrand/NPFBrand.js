import React, { useEffect } from 'react'
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
    const { setBrandList } = props;
    // Above is same as const setBrandList = props.setBrandList;

    useEffect(() => {
        const getRequestParams = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }

        const getBrands = () => {
            fetch(`${config.API_URL}/api/brands`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("Server responded with an error!")
                    }
                        return response.json()
                })
                .then(brandArray => {
                    setBrandList(brandArray)
                })
        }

        getBrands()
    }, [setBrandList])

    const makeBrandOptions = () => {
        console.log("makeBrandOptions was called")

        const brands = props.brandList.map(brand => ({
            id: brand.id,
            text: brand.english_name,
            value: brand.id
        }))

        console.log("makeBrandOptions was called and brandList is ", props.brandList)


        brands.sort((a, b) => 
            a.text > b.text ? 1 : -1
        )

        return [
            {
                id: 0,
                text: "Select a brand",
                value: 1
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
            ...props.currencies
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
            value: system.id
        }))

        return [
            defaultOption,
            ...sizeSystems
        ]
    }

    // const changeBrandCurrency = event => {
    //     const values = {...props.newBrandFields}
    //     values[event.target.name] = event.target.value
    //     props.setNewBrandFields(values)
    // }

    const changeFields = event => {
        const values = {...props.newBrandFields}
        values[event.target.name] = event.target.value
        props.setNewBrandFields(values)
    }

    const newBrandPopUp = () => {
        if (props.brandPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const handleBrandPopClose = () => {
        props.setBrandPopUp(false)
    }

    const addBrand = brand => {
        props.setBrandList([
        ...props.brandList,
        {
            "id": brand.id,
            "english_name": brand.english_name,
            "home_currency": Number(brand.home_currency),
            "size_system": Number(brand.size_system),
            "website": brand.website,
            "approved_by_admin": brand.approved_by_admin
        }
        ])

        props.setCurrentBrandId(brand.id)
    }

    const submitNewBrand = () => {
        const formattedBrand = () => {
            if (props.newBrandFields.brandName) {
                const val = props.newBrandFields.brandName.toLowerCase().split(" ")
                
                for (let i = 0; i < val.length; i++) {
                    val[i] = val[i][0].toUpperCase() + val[i].substr(1)
                }

                return val.join(" ")
            }
        }

        const formattedWebsite = () => {
            if (props.newBrandFields.brandWebsite) {
                const val = props.newBrandFields.brandName.toLowerCase()

                return val
            }
        }

        const data = {
            "english_name": formattedBrand(),
            "home_currency": props.newBrandFields.brandCurrency,
            "size_system": Number(props.newBrandFields.brandSizeSystem),
            "website": formattedWebsite(),
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

    const handleBrandPopSubmit = () => {
        const missingFields = []

        Object.keys(props.newBrandFields).forEach(key => {
            !props.newBrandFields[key] && missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            submitNewBrand()
            handleBrandPopClose()
        }
    }

    const nextButton = () => {props.setPage(props.currentPage + 1)}

    // const nextButton = event => {
    //     event.preventDefault()

    //     props.currentBrandId !== 0
    //         ? props.setPage(props.currentPage + 1)
    //         : alert("Please select a brand")
    // }

    return (
        <div id='NPFBrand' className='relative'>
            <FormPage title='Brand'>
                <FormDropdown
                    id='brand'
                    name='brand'
                    prompt='Which brand made this product?'
                    options={makeBrandOptions()}
                    currentValue={props.currentBrandId}
                    handleChange={event => {
                        props.setCurrentBrandId(Number(event.target.value))
                        props.setNewProductFields({
                            ...props.newProductFields,
                            currencyId: props.brandList[0].home_currency
                        })
                    }}
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

                <NPFFooter
                    buttons='prevNext'
                    previousButton={() => props.setPage(props.currentPage - 1)} 
                    nextButton={event => {
                        nextButton(event)
                    }}
                    nextType='submit'
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
                    name='brandName'
                    prompt='Brand name'
                    currentValue={props.newBrandFields['brandName']} 
                    handleChange={event => changeFields(event)}
                />

                <FormUrlInput 
                    id='brandWebsite'
                    name='brandWebsite'
                    prompt='Brand website'
                    currentValue={props.newBrandFields['brandWebsite']} 
                    handleChange={event => changeFields(event)}
                />

                <FormDropdown
                    id='brandCurrency'
                    name='brandCurrency'
                    prompt='Which currency does the brand list prices in?'
                    subprompt="If the brand offers multiple currency options on their website, select the currency of the brand's home country.  Not sure?  Select 'Not sure' from the dropdown."
                    currentValue={props.newBrandFields['brandCurrency']} 
                    handleChange={event => changeFields(event)}
                    options={makeCurrencyOptions()}
                />

                <FormDropdown
                    id='brandSizeSystem'
                    name='brandSizeSystem'
                    prompt='Which sizing system does the brand use?'
                    subprompt="Not sure?  Select 'Not sure' from the dropdown."

                    currentValue={props.newBrandFields['brandSizeSystem']} 
                    handleChange={event => changeFields(event)}
                    options={makeSizeSystemOptions()}
                />
            </FormPopUp>
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