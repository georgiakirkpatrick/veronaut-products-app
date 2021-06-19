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
        const factoryQty = props.fabricProps.factoryList.length
        const mills = props.fabricProps.factoryList.slice(1, factoryQty)
        const alphaMills = mills.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formatedMills = alphaMills.map(mill => (
            {
                id: mill.id,
                text: mill.english_name,
                value: mill.id
            }
        ))

        return [
            {
                id: 0,
                text: `Select a factory`,
                value: 0
            },
            {
                id: 1,
                text: 'Not disclosed',
                value: 1
            },
            ...formatedMills
        ]
    }

    const addFactory = (stage, factory) => {
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
            
        const newFactory = {...props.sewFact}
        newFactory.factoryId = factory.id

        if (stage === 's') {
            props.setSewFact(newFactory)
        } else if (stage === 'c') {
            props.setCutFact(newFactory)
        }
    }

    const submitNewFactory = stage => {
        const data = {
            "english_name": props.fabricProps.newFact.name,
            "country": props.fabricProps.newFact.countryId,
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
                addFactory(stage, responseJson)
            })

        props.fabricProps.setNewFact({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })
    }

    const handleFactoryPopSubmit = stage => {
        const missingFields = []

        Object.keys(props.fabricProps.newFact).forEach(key => {
            if (props.fabricProps.newFact[key] === '' || 0) {
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
            submitNewFactory(stage)
            handlePopUpClose()

        }
    }

    // NEW FACTORY
    const sewFactPopUpStatus = () => {
        if (props.sewFactPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const cutFactPopUpStatus = () => {
        if (props.cutFactPopUp === true) {
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
        props.setSewFactPopUp(false)
        props.setCutFactPopUp(false)

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
        const newCertList = [
            ...props.fabricProps.certificationList,
            {
                id: certification.id,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ]
            
        newCertList.sort((a, b) => a.text > b.text ? 1 : -1)

        props.fabricProps.setCertificationList(newCertList)

        console.log(props.certChecks)
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
            props.fabricProps.setNewCert(
                {
                    name: '',
                    website: ''
                }
            )
        }
    }
    
    const cmtNotesChange = event => {
        const newNotes = event.target.value
        props.setCmtNotes(newNotes)
    }

    // const nextButton = () => {props.fabricProps.setPage(props.fabricProps.currentPage + 1)}

    const nextButton = () => {
        const missingFields = []
        
        const requiredSewFields = {
            'countryId': 'sewing location',
            'factoryId': 'sewing factory'
        }

        Object.keys(requiredSewFields).forEach(key => {
            if (props.sewFact[key] === 0) {
                missingFields.push(requiredSewFields[key])
            }
        })

        const requiredCutFields = {
            'countryId': 'cutting location',
            'factoryId': 'cutting factory'
        }
        
        Object.keys(requiredCutFields).forEach(key => {
            if (props.cutFact[key] === 0) {
                missingFields.push(requiredCutFields[key])
            }
        })

        if (missingFields.length === 1) {
            alert(`Please complete the '${missingFields[0]}' field`)
        } else if (missingFields.length > 1) {
            alert(`Please complete the following fields: ${missingFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFields.length === 0) {
            props.fabricProps.setPage(props.fabricProps.currentPage + 1)
        }
    }

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
                        name='countryId'
                        prompt='Location'
                        currentValue={props.sewFact.countryId}
                        options={makeCountryOptions()}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormDropdown
                        id='sewing-factory'
                        name='factoryId'
                        prompt='Factory'
                        currentValue={props.sewFact.factoryId}
                        options={makeFactoryOptions()}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FACTORY'
                        handleClick={() => props.setSewFactPopUp(true)} 
                    />
                </FormFieldset>
                
                <FormFieldset 
                    prompt='Cutting factory'
                    subprompt='If the product page does not provide a factory location, select "Not disclosed"'
                >
                    <FormDropdown
                        id='cutting-location'
                        name='countryId'
                        prompt='Location'
                        currentValue={props.cutFact.countryId}
                        options={makeCountryOptions()}
                        handleChange={event => cuttingChangeInput(event)} 
                    />
                    <FormDropdown
                        id='cutting-factory'
                        name='factoryId'
                        prompt='Factory'
                        currentValue={props.cutFact.factoryId}
                        options={makeFactoryOptions()}
                        handleChange={event => cuttingChangeInput(event)} 
                    />

                    <FormButton
                        buttonText='ADD A FACTORY'
                        handleClick={() => props.setCutFactPopUp(true)}
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
                id='addSewFact'
                status={sewFactPopUpStatus()}
                title='New Factory'
                close={() => handlePopUpClose()}
                submit={() => handleFactoryPopSubmit('s')}
                buttonText='SUBMIT FACTORY'
                buttonType='submit'
            >
                <FormPromptWithSub 
                    prompt='Add a factory'
                    promptSubtitle={`Include the factory website if it is provided on the product page.  Copy and paste all available information about the factory in the 'notes' field`}
                />

                <FormTextInput 
                    id='sew-factory-name'
                    name='name'
                    prompt='Factory name'
                    currentValue={props.fabricProps.newFact.name}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormDropdown
                    id='sew-factory-location'
                    name='countryId'
                    prompt='Factory location'
                    currentValue={props.fabricProps.newFact.countryId}
                    options={makeCountryOptions()}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormUrlInput 
                    id='sew-factory-website'
                    name='website'
                    prompt='Factory website'
                    currentValue={props.fabricProps.newFact.website}
                    handleChange={event => newFactChangeInput(event)}
                />

                <FormTextInput
                    id='sew-factory-notes'
                    name='notes'
                    prompt='Notes'
                    currentValue={props.fabricProps.newFact.notes}
                    handleChange={event => newFactChangeInput(event)}
                />
            </FormPopUp>

            <FormPopUp
                id='addCutFact'
                status={cutFactPopUpStatus()}
                title='New Factory'
                close={() => handlePopUpClose()}
                submit={() => handleFactoryPopSubmit('c')}
                buttonText='SUBMIT FACTORY'
                buttonType='submit'
            >
                <FormPromptWithSub 
                    prompt='Add a factory'
                    promptSubtitle={`Include the factory website if it is provided on the product page.  Copy and paste all available information about the factory in the 'notes' field`}
                />

                <FormTextInput 
                    id='cut-factory-name'
                    name='name'
                    prompt='Factory name'
                    currentValue={props.fabricProps.newFact.name}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormDropdown
                    id='cut-factory-location'
                    name='countryId'
                    prompt='Factory location'
                    currentValue={props.fabricProps.newFact.countryId}
                    options={makeCountryOptions()}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormUrlInput 
                    id='cut-factory-website'
                    name='website'
                    prompt='Factory website'
                    currentValue={props.fabricProps.newFact.website}
                    handleChange={event => newFactChangeInput(event)}
                />

                <FormTextInput
                    id='cut-factory-notes'
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
    certChecks: {},
    cmtNotes: '',
    cutFact: {
        countryId: '', 
        factoryId: ''
    },
    fabricProps: {
        certificationList: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        factPopUp: false,
        factoryList: [],
        fiberPopUp: false,
        fiberTypeList: [],
        millPopUp: false,
        newCert: {
            name: '',
            website: ''
        },
        newFact: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        newFiber: {
            name: ''
        },
        newMill: {
            name: '',
            countryId: '',
            website: '',
            notes: ''
        },
        setCertificationList: () => {},
        setFiberTypeList: () => {},
        setFactoryList: () => {},
        setCertPopUp: () => {},
        setFiberPopUp: () => {},

        setMillPopUp: () => {},
        setNewCert: () => {},
        setNewFact: () => {},
        setNewFiber: () => {},
        setNewMill: () => {},
        setPage: () => {},
        setSewFactPopUp: () => {},
        sewFactPopUp: false
    },
    setCertChecks: () => {},
    setCmtNotes:  () => {},
    setCutFact: () => {},
    setSewFact: () => {},
    sewFact: {
        countryId: '', 
        factoryId: ''
    }
}

export default NPFManufacturing