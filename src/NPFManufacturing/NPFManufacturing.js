import React from 'react'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormTextarea from '../FormTextarea/FormTextarea'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import TokenService from '../services/token-service'
import config from '../config'

const NPFManufacturing = props => {
    const {
        certChecks,
        cmtNotes,
        currentPage,
        cutFact,
        cutFactPopUp,
        fabricProps,
        setCutFact,
        setCutFactPopUp,
        setCertChecks,
        setCmtNotes,
        setPage,
        setSewFact,
        setSewFactPopUp,
        sewFact,
        sewFactPopUp
    } = props

    const makeFactoryOptions = () => {
        const factoryQty = fabricProps.factArray.length
        const mills = fabricProps.factArray.slice(1, factoryQty)
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
        fabricProps.setFactArray([
            ...fabricProps.factArray,
            {
                "id": Number(factory.id),
                "english_name": factory.english_name,
                "country": Number(factory.country),
                "website": factory.website,
                "notes": factory.notes,
                "approved_by_admin": factory.approved_by_admin
            }
        ])
            
        const newFactory = {...sewFact}
        newFactory.factoryId = factory.id

        if (stage === 's') {
            setSewFact(newFactory)
        } else if (stage === 'c') {
            setCutFact(newFactory)
        }
    }

    const submitNewFactory = stage => {
        const data = {
            "english_name": fabricProps.newFact.name,
            "country": fabricProps.newFact.countryId,
            "website": fabricProps.newFact.website,
            "notes": fabricProps.newFact.notes,
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Authorization': `basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/factories`, postRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(stage, responseJson)
            })

        fabricProps.setNewFact({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })
    }

    const handleFactoryPopSubmit = stage => {
        if (fabricProps.newFact.name === '') {
            alert("Please complete the 'Factory name' field.")

        } else {
            submitNewFactory(stage)
            handlePopUpClose()
        }
    }

    // NEW FACTORY
    const sewFactPopUpStatus = () => {
        if (sewFactPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const cutFactPopUpStatus = () => {
        if (cutFactPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const newFactChangeInput = event => {
        const newFactFields = {...fabricProps.newFact}
        newFactFields[event.target.name] = event.target.value
        fabricProps.setNewFact(newFactFields)
    }

    const handlePopUpClose = () => {
        fabricProps.setCertPopUp(false)
        setSewFactPopUp(false)
        setCutFactPopUp(false)

    }

    // SEWING FACTORY
    const sewingChangeInput = event => {
        const sewingFactory = {...sewFact}
        sewingFactory[event.target.name] = event.target.value
        setSewFact(sewingFactory)
    }

    // CUTTING FACTORY
    const cuttingChangeInput = event => {
        const cuttingFactory = {...cutFact}
        cuttingFactory[event.target.name] = event.target.value
        setCutFact(cuttingFactory)
    }

    // CERTIFICATIONS
    const addCertification = certification => {
        const newCertArray = [
            ...fabricProps.certArray,
            {
                id: certification.id,
                text: certification.text,
                value: certification.id,
                website: certification.website,
                approved: certification.approved,
                createdAt: certification.createdAt
            }
        ]
            
        newCertArray.sort((a, b) => a.text > b.text ? 1 : -1)
        fabricProps.setCertArray(newCertArray)
    }

    const certificationChange = event => {
        setCertChecks({
            ...certChecks, 
            [event.target.name]: !certChecks[event.target.name]})
    }

    const certPopUpStatus = () => {
        if (fabricProps.certPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }
    
    const cmtNotesChange = event => {
        const newNotes = event.target.value
        setCmtNotes(newNotes)
    }

    const newCertChangeInput = event => {
        const newCertFields = {...fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        fabricProps.setNewCert(newCertFields)
    }

    const submitNewCert = () => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newCert.name),
            "website": fabricProps.formatUrl(fabricProps.newCert.website),
            "approved_by_admin": false
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Authorization': `basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/certifications`,
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

        Object.keys(fabricProps.newCert).forEach(key => {
            fabricProps.newCert[key] === '' && missingFields.push(
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
            fabricProps.setNewCert(
                {
                    name: '',
                    website: ''
                }
            )
        }
    }

    const nextButton = () => {
        const missingFields = []
        
        const requiredSewFields = {
            'countryId': 'sewing location',
            'factoryId': 'sewing factory'
        }

        Object.keys(requiredSewFields).forEach(key => {
            if (sewFact[key] === 0) {
                missingFields.push(requiredSewFields[key])
            }
        })

        const requiredCutFields = {
            'countryId': 'cutting location',
            'factoryId': 'cutting factory'
        }

        Object.keys(requiredCutFields).forEach(key => {
            if (cutFact[key] === 0) {
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
            fabricProps.setPage(fabricProps.currentPage + 1)
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
                        currentValue={sewFact.countryId}
                        options={fabricProps.countries}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormDropdown
                        id='sewing-factory'
                        name='factoryId'
                        prompt='Factory'
                        currentValue={sewFact.factoryId}
                        options={makeFactoryOptions()}
                        handleChange={event => sewingChangeInput(event)} 
                    />

                    <FormPromptWithSub
                        prompt='Factory not listed above?'
                        promptSubtitle=''
                    />

                    <FormButton 
                        buttonText='Add a factory'
                        handleClick={() => setSewFactPopUp(true)} 
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
                        currentValue={cutFact.countryId}
                        options={fabricProps.countries}
                        handleChange={event => cuttingChangeInput(event)} 
                    />
                    <FormDropdown
                        id='cutting-factory'
                        name='factoryId'
                        prompt='Factory'
                        currentValue={cutFact.factoryId}
                        options={makeFactoryOptions()}
                        handleChange={event => cuttingChangeInput(event)} 
                    />

                    <FormPromptWithSub
                        prompt='Factory not listed above?'
                        promptSubtitle=''
                    />

                    <FormButton
                        buttonText='Add a factory'
                        handleClick={() => setCutFactPopUp(true)}
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Does the product have any of the following certifications?'
                    subprompt='Check all that apply'
                >
                    <FormCheckboxSection
                        prompt=''
                        options={fabricProps.certArray}
                        selectedOptions={certChecks}
                        handleChange={event => certificationChange(event)}
                    />

                    <FormPromptWithSub
                        prompt='Certification not listed above?'
                        promptSubtitle=''
                    />

                    <FormButton 
                        buttonText='Add a certification'
                        handleClick={() => fabricProps.setCertPopUp(true)} 
                    />
                </FormFieldset>

                <FormFieldset>
                    <FormTextarea
                        currentValue={cmtNotes}
                        handleChange={event => cmtNotesChange(event)}
                        id='additional-notes'
                        name='cmtNotes'
                        prompt='Are there any additional notes about how the product was cut, sewn, or finished?'
                    />
                </FormFieldset>
            </FormPage>


            <NPFFooter 
                buttons='prevNext' 
                previousButton={() => setPage(currentPage - 1)} 
                nextButton={event => nextButton(event)}
            />

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
                    currentValue={fabricProps.newFact.name}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormDropdown
                    id='sew-factory-location'
                    name='countryId'
                    prompt="Factory location.  Select 'Not disclosed' if not included on the product page."
                    currentValue={fabricProps.newFact.countryId}
                    options={fabricProps.countries}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormUrlInput 
                    id='sew-factory-website'
                    name='website'
                    prompt='Factory website.  Leave blank if not included on the product page.'
                    currentValue={fabricProps.newFact.website}
                    handleChange={event => newFactChangeInput(event)}
                />

                <FormTextarea
                    currentValue={fabricProps.newFact.notes}
                    handleChange={event => newFactChangeInput(event)}
                    id='sew-factory-notes'
                    name='sewNotes'
                    prompt='Are there any additional notes about the sewing factory provided on the product page?  If so, copy them and paste them here.'
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
                    promptSubtitle={`Include the factory website if it is provided on the product page.`}
                />

                <FormTextInput 
                    id='cut-factory-name'
                    name='name'
                    prompt='Factory name'
                    currentValue={fabricProps.newFact.name}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormDropdown
                    id='cut-factory-location'
                    name='countryId'
                    prompt="Factory location.  Select 'Not disclosed' if not included on the product page."
                    currentValue={fabricProps.newFact.countryId}
                    options={fabricProps.countries}
                    handleChange={event => newFactChangeInput(event)} 
                />

                <FormUrlInput 
                    id='cut-factory-website'
                    name='website'
                    prompt='Factory website.  Leave blank if not included on the product page.'
                    currentValue={fabricProps.newFact.website}
                    handleChange={event => newFactChangeInput(event)}
                />

                <FormTextarea
                    currentValue={fabricProps.newFact.notes}
                    handleChange={event => newFactChangeInput(event)}
                    id='cut-factory-notes'
                    name='cutNotes'
                    prompt='Are there any additional notes about the cutting factory provided on the product page?'
                />
            </FormPopUp>

            <FormPopUp
                id='cert-pop-up'
                status={certPopUpStatus()}
                title='New Certification'
                close={() => handlePopUpClose()}
                submit={() => handleCertPopSubmit()}
                buttonText='Create certification'
                buttonType='submit'
            >
                <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />
                
                <FormTextInput 
                    id='man-cert-name'
                    name='name'
                    prompt='Certification name'
                    currentValue={fabricProps.newCert.text}
                    handleChange={event => newCertChangeInput(event)} 
                />
                
                <FormUrlInput
                    id='man-cert-website'
                    name='website'
                    prompt='Website.  Leave blank if not included on the product page.'
                    currentValue={fabricProps.newCert.website}
                    handleChange={event => newCertChangeInput(event)}
                />
            </FormPopUp>
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
        certArray: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        factPopUp: false,
        factArray: [],
        fiberPopUp: false,
        fiberTypeArray: [],
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
        setCertArray: () => {},
        setFiberTypeArray: () => {},
        setFactArray: () => {},
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