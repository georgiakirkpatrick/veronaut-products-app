import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import config from '../config'

const NPFManufacturing = props => {
    const makeCountryOptions = () => {
        const countries = props.fabricProps.countries.map((country, index) => ({
            id: index + 2,
            text: country.text,
            value: index + 2
        }))

        return [
            {
                id: 0,
                text: 'Select a country',
                value: 0
            },
            ...countries
        ]
    }

    const makeFactoryOptions = () => {
        const factories = props.fabricProps.factoryList.map(factory => ({
            id: factory.id,
            text: factory.english_name,
            value: factory.id
        }))

        return [
            {
                id: 0,
                text: 'Select a factory',
                value: 0
            },
            ...factories
        ]
    }

    const addFactory = factory => {
        props.fabricProps.setFactoryList([
            ...props.fabricProps.factoryList,
            {
                "id": Number(factory.id),
                "english_name": factory.english_name,
                "country": Number(factory.country),
                "website": factory.website,
                "notes": factory.notes,
                "approved_by_admin": factory.approved_by_admin
            }
        ])
    }

    const submitNewFactory = () => {
        const data = {
            "english_name": props.fabricProps.newFact.name,
            "country": props.fabricProps.newFact.location,
            "website": props.fabricProps.newFact.website,
            "notes": props.fabricProps.newFact.notes,
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/factories`, postRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(responseJson)
            })
    }

    const handleFactoryPopSubmit = () => {
        const missingFields = []

        Object.keys(props.fabricProps.newFact).forEach(key => {
            props.fabricProps.newFact[key] === '' && missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            submitNewFactory()
            handlePopUpClose()
        }
    }

    // NEW FACTORY
    const factPopUpStatus = () => {
        if (props.fabricProps.factPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const newFactChangeInput = event => {
        const newFactFields = {...props.fabricProps.newFact}
        newFactFields[event.target.name] = event.target.value
        props.fabricProps.setNewFact(newFactFields)
    }

    const handlePopUpClose = () => {
        props.fabricProps.setCertPopUp(false)
        props.fabricProps.setFactPopUp(false)
    }

    // SEWING FACTORY
    const sewingChangeInput = event => {
        const sewingFactory = {...props.sewFact}
        sewingFactory[event.target.name] = event.target.value
        props.setSewFact(sewingFactory)
    }

    // CUTTING FACTORY
    const cuttingChangeInput = event => {
        const cuttingFactory = {...props.cutFact}
        cuttingFactory[event.target.name] = event.target.value
        props.setCutFact(cuttingFactory)
    }

    // CERTIFICATIONS
    const certPopUpStatus = () => {
        if (props.fabricProps.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const certificationChange = event => {
        props.setCertChecks({
            ...props.certChecks, 
            [event.target.id]: !props.certChecks[event.target.id]})
    }

    const newCertChangeInput = event => {
        const newCertFields = {...props.fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        props.fabricProps.setNewCert(newCertFields)
    }

    const addCertification = certification => {
        props.fabricProps.setCertificationList([
            ...props.fabricProps.certificationList,
            {
                id: certification.id,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ])

        props.setCertChecks({
            ...props.certChecks,
            [certification.id]: false
        })
    }

    const submitNewCert = () => {
        const data = {
            "english_name": props.fabricProps.newCert.name,
            "website": props.fabricProps.newCert.website,
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/certifications`,
            postRequestParams
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Server responded with an error!')
            }
            return response.json()
        })
        .then(responseJson => {
            addCertification(responseJson)
        })
    }

    const handleCertPopSubmit = () => {
        const missingFields = []

        Object.keys(props.fabricProps.newCert).forEach(key => {
            props.fabricProps.newCert[key] === '' && missingFields.push(
                key.replace( /([A-Z])/g, " $1" ).toLowerCase()
            )
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            submitNewCert()
            handlePopUpClose()
        }
    }
    
    const cmtNotesChange = event => {
        const newNotes = event.target.value
        props.setCmtNotes(newNotes)
    }

    const nextButton = () => {props.fabricProps.setPage(props.fabricProps.currentPage + 1)}

    return (
        <div id='manufacturing'>
            <FormPage title='Manufacturing'>
                <FormPromptWithSub 
                    prompt='Enter the manufacturing information provided on the product page.'
                    promptSubtitle='If the product page does not provide factory names or locations, select "not disclosed" from the dropdown.'
                />

                <FormFieldset
                    prompt='Sewing factory'
                >
                    <FormDropdown
                        id='sewing-location'
                        name='location'
                        prompt='Location'
                        currentValue={props.sewFact.location}
                        options={makeCountryOptions()}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormDropdown
                        id='sewing-factory'
                        name='factory'
                        prompt='Factory'
                        currentValue={props.sewFact.factoryId}
                        options={makeFactoryOptions()}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FACTORY' 
                        handleClick={() => props.fabricProps.setFactPopUp(true)} 
                    />
                </FormFieldset>
                
                <FormFieldset 
                    prompt='Add a cutting factory'
                    subprompt='If the product page does not provide a factory location, select "Not disclosed"'
                >
                    <FormDropdown
                        id='cutting-location'
                        name='location'
                        prompt='Location'
                        currentValue={props.cutFact.location}
                        options={makeCountryOptions()}
                        handleChange={event => cuttingChangeInput(event)} 
                    />
                    <FormDropdown
                        id='cutting-factory'
                        name='factory'
                        prompt='Factory'
                        currentValue={props.cutFact.factory}
                        options={makeFactoryOptions()}
                        handleChange={event => cuttingChangeInput(event)} 
                    />

                    <FormButton
                        buttonText='ADD A FACTORY'
                        handleClick={() => props.fabricProps.setFactPopUp(true)}
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Does the product have any of the following certifications?'
                    subprompt='Check all that apply'
                >
                    <FormCheckboxSection
                        prompt=''
                        options={props.fabricProps.certificationList}
                        selectedOptions={props.certChecks}
                        handleChange={event => certificationChange(event)}
                    />
                    <FormButton 
                        buttonText='ADD A CERTIFICATION'
                        handleClick={() => props.fabricProps.setCertPopUp(true)} 
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Are there any additional notes about how the product was cut, sewn, or finished?'
                    subprompt=''
                >
                    <FormTextInput
                        id='additional-notes'
                        name='cmtNotes'
                        currentValue={props.cmtNotes}
                        handleChange={event => cmtNotesChange(event)}
                    />
                </FormFieldset>
            </FormPage>

            <FormPopUp
                id='addFactory'
                status={factPopUpStatus()}
                title='New Factory'
                close={() => handlePopUpClose()}
                submit={() => handleFactoryPopSubmit()}
                buttonText='SUBMIT FACTORY'
                buttonType='submit'
            >
                <FormPromptWithSub 
                    prompt='Add a factory'
                    promptSubtitle={`Include the factory website if it is provided on the product page.  Copy and paste all available information about the factory in the 'notes' field`}
                />

                <FormTextInput 
                    id='factory-name'
                    name='name'
                    prompt='Factory name'
                    currentValue={props.fabricProps.newFact.name}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormDropdown
                    id='factory-location'
                    name='location'
                    prompt='Factory location'
                    currentValue={props.fabricProps.newFact.location}
                    options={makeCountryOptions()}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormUrlInput 
                    id='factory-website'
                    name='website'
                    prompt='Factory website'
                    currentValue={props.fabricProps.newFact.website}
                    handleChange={event => newFactChangeInput(event)}
                />

                <FormTextInput
                    id='factory-notes'
                    name='notes'
                    prompt='Notes'
                    currentValue={props.fabricProps.newFact.notes}
                    handleChange={event => newFactChangeInput(event)}
                />
            </FormPopUp>

            <FormPopUp
                id='cert-pop-up'
                status={certPopUpStatus()}
                title='New Certification'
                close={() => handlePopUpClose()}
                submit={() => handleCertPopSubmit()}
                buttonText='CREATE CERTIFICATION'
                buttonType='submit'
            >
                <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />
                
                <FormTextInput 
                    id='man-cert-name'
                    name='name'
                    prompt='Certification name'
                    currentValue={props.fabricProps.newCert.name}
                    handleChange={event => newCertChangeInput(event)} 
                />
                
                <FormUrlInput
                    id='man-cert-website'
                    name='website'
                    prompt='Website'
                    currentValue={props.fabricProps.newCert.website}
                    handleChange={event => newCertChangeInput(event)}
                />
            </FormPopUp>

            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => props.setPage(props.currentPage - 1)} 
                nextButton={event => nextButton(event)}
            />
        </div>
    )  
}

NPFManufacturing.defaultProps = {
    cmtNotes: '',
    setCmtNotes:  () => {},
    certChecks: {},
    setCertChecks: () => {},
    cutFact: {
        countryId: '', 
        factoryId: ''
    },
    setCutFact: () => {},
    sewFact: {
        countryId: '', 
        factoryId: ''
    },
    setSewFact: () => {},
    fabricProps: {
        currentPage: 0,
        setPage: () => {},
        countries: [],
        certificationList: [],
        setCertificationList: () => {},
        initCerts: {},
        factoryList: [],
        fiberTypeList: [],
        setFiberTypeList: () => {},
        setFactoryList: () => {},
        certPopUp: false,
        setCertPopUp: () => {},
        factPopUp: false,
        setFactPopUp: () => {},
        fiberPopUp: false,
        setFiberPopUp: () => {},
        millPopUp: false,
        setMillPopUp: () => {},
        newCert: {
            name: '',
            website: ''
        },
        setNewCert: () => {},
        newFact: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        setNewFact: () => {},
        newFiber: {
            name: ''
        },
        setNewFiber: () => {},
        newMill: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        setNewMill: () => {},
    }
}

export default NPFManufacturing