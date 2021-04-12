import React, { useState } from 'react'
import config from '../config'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import NPFFooter from '../NPFFooter/NPFFooter'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import FormNumberInput from '../FormNumberInput/FormNumberInput'

const NPFFabrics = props => {
    const [fiberCertChecks, setFiberCertChecks] = useState({0: props.fabricProps.initialCertChecks})
    const [fiberCount, setFiberCount] = useState(1)

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

    const makeMillOptions = () => {
        const mills = props.fabricProps.factoryList.map(factory => ({
            id: factory.id,
            text: factory.english_name,
            value: factory.id
        }))

        return [
            {
                id: 0,
                text: 'Select a fabric mill',
                value: 0
            },
            ...mills
        ]
    }

    const makeFiberOptions = () => {
        const fibers = props.fabricProps.fiberTypeList.map(fiberType => ({
            id: fiberType.id,
            text: fiberType.english_name,
            value: fiberType.id
        }))

        return [
            {
                id: 0,
                text: 'Select a fiber or material',
                value: 0
            },
            ...fibers
        ]
    }
    
    const fabChange = event => {
        const fabFields = {...props.fabFact}
        fabFields[event.target.name] = event.target.value
        props.setFabFact(fabFields)
    }

    const newFactChange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    = event => {
        const newFields = {...props.fabricProps.newFact}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        props.fabricProps.setNewFact(newFields)
    }

    const newMillChange = event => {
        const newFields = {...props.fabricProps.newMill}
        newFields[event.target.name] = event.target.value
        props.fabricProps.setNewMill(newFields)
    }

    const newCertChange = event => {
        const newCertFields = {...props.fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        props.fabricProps.setNewCert(newCertFields)
    }

    const fabricCertChange = event => {
        props.setCertChecks({...props.certChecks, [event.target.id]: !props.certChecks[event.target.id]})
    }

    const fiberCertChange = (event, index) => {
        const fiberObject = fiberCertChecks[index]

        setFiberCertChecks(
            {
                ...fiberCertChecks,
                [index]: {
                    ...fiberObject,
                    [event.target.id]: !fiberObject[event.target.id]
                }
            }
        )
    }

    const fibersChangeInput = (index, event) => {
        const values = [...props.fiberFieldsets]
        values[index][event.target.name] = event.target.value
        props.setFiberFieldsets(values)
    }

    const addAFiber = () => {
        props.setFiberFieldsets([
            ...props.fiberFieldsets,
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                certIds: []
            }
        ])

        setFiberCertChecks({
            ...fiberCertChecks,
            [fiberCount]: props.fabricProps.initialCertChecks
        })

        setFiberCount(fiberCount + 1)
    }

    const removeFiber = (index) => {
        const values = [...props.fiberFieldsets]
        values.splice(index, 1)
        props.setFiberFieldsets(values)
    }

    const handleClose = () => {
        props.fabricProps.setCertPopUp(false)
        props.fabricProps.setFactPopUp(false)
        props.fabricProps.setFiberPopUp(false)
        props.fabricProps.setMillPopUp(false)
    }

    const certPopUpStatus = () => {
        if (props.fabricProps.certPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const factPopUpStatus = () => {
        if (props.fabricProps.factPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const fiberPopUpStatus = () => {
        if (props.fabricProps.fiberPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const millPopUpStatus = () => {
        if (props.fabricProps.millPopUp === true) {
            return 'FormPopUp__pop-up active'
        }
        return 'FormPopUp__pop-up'
    }

    const addFactory = newFactory => {
        props.fabricProps.setFactoryList([
            ...props.fabricProps.factoryList,
            {
                id: newFactory.id,
                english_name: newFactory.english_name,
                country: newFactory.country,
                website: newFactory.website,
                notes: newFactory.notes,
                approved_by_admin: newFactory.approved_by_admin
            }
        ])
    }

    const addFiberType = newFiberType => {
        props.fabricProps.setFiberTypeList([
            ...props.fabricProps.fiberTypeList,
            newFiberType
        ])
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

        props.fabricProps.setInitialCertChecks({
            ...props.fabricProps.initialCertChecks,
            [certification.id]: false
        })
    }

    const submitFactory = () => {
        const data = {
            "english_name": props.fabricProps.newFact.name,
            "country": props.fabricProps.newFact.location,
            "website": props.fabricProps.newFact.website,
            "notes": props.fabricProps.newFact.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const missingFields = []

        Object.keys(props.fabricProps.newFact).forEach(key => {
            if (props.fabricProps.newFact[key] === '' || 0) {
                missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
            }
        })

        if (missingFields.length >= 1) {
            alert(`The factory name and country fields are required.  Please complete both fields.`)
        } else {
            fetch(`${config.API_URL}/api/factories`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFactory(responseJson)
            })
            props.fabricProps.setFactPopUp(false)
            props.fabricProps.setNewFact({
                name: '',
                countryId: 0,
                website: '',
                notes: ''
            })
        }
        
    }

    const submitFiber = () => {
        const data = {
            "english_name": props.fabricProps.newFiber.name,
            "fiber_type_class": "undetermined"
        }

        const postRequestParams = {
            method: 'POST',
            headers: 'Content-type: application/json',
            body: JSON.stringify(data)
        }

        if (props.fabricProps.newFiber.name === '') {
            alert(`Please enter a new fiber.`)
        } else {
            fetch(`${config.API_URL}/api/fabrics/fiber-types`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
            .then(responseJson => {
                addFiberType(responseJson)
            })

            props.fabricProps.setFiberPopUp(false)
            props.fabricProps.setNewFiber({
                name: ''
            })
        }
    }

    const submitNewCert = () => {
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
            props.fabricProps.setCertPopUp(false)
            props.fabricProps.setNewCert({
                name: '',
                website: ''
            })
        }    
    }

    const nextButton = event => {
        const missingFabricFields = []

        Object.keys(props.fabFact).forEach(key => {
            if (props.fabFact[key] === '' || 0) {
                missingFabricFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
            }
        })
            
        if (missingFabricFields.length === 1) {
            alert(`Please complete the '${missingFabricFields[0]}' field`)
        } else if (missingFabricFields.length > 1) {
            alert(`Please complete the following fields: ${missingFabricFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFabricFields.length === 0) {
            props.fiberFieldsets.forEach(fieldset => {
                if (fieldset.fiberTypeId === 0) {
                    alert(`Please select an option for each 'Fiber or material' field.  Remove any unused fiber sections with the 'Remove' button.`)
                } else if (fieldset.originId === 0) {
                    alert(`Please select an option for each 'Fiber origin' field.  Remove any unused fiber sections with the 'Remove' button.`)
                }

                props.setPage(props.currentPage + 1)
            })    
        }
    }

    // const nextButton = () => {props.fabricProps.setPage(props.fabricProps.currentPage + 1)}

    return (
        <div id='fabrics'>
            <FormPage title={props.title}>
                <FormPromptWithSub 
                    prompt='Please enter the fabric details provided on the product webpage.'
                    promptSubtitle='If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />
                <FormFieldset
                    prompt='Fabric Dyeing, Printing, and Finishing'
                >
                    <FormDropdown 
                        id='dyeFinLocation'
                        name='dyeFinLocation'
                        prompt='Dyeing and finishing location'
                        currentValue={props.fabFact.dyeFinLocation}
                        options={makeCountryOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='dye-fin-id'
                        name='dyeFinId'
                        prompt='Dyeing and finishing factory'
                        currentValue={props.fabFact.dyeFinId}
                        options={makeFactoryOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FACTORY' 
                        handleClick={() => props.fabricProps.setFactPopUp(true)}
                    />

                    <FormPopUp
                        id={props.id + 'NewFact'} 
                        status={factPopUpStatus()}
                        title='New Factory'
                        close={() => handleClose()}
                        submit={() => submitFactory()}
                        buttonText='Submit Factory'
                    >
                        <FormTextInput 
                            id={props.id + 'NewFactName'}
                            name='name'
                            prompt='Factory name'
                            currentValue={props.fabricProps.newFact.name}
                            handleChange={event => newFactChange(event)} 
                        />
                        <FormDropdown
                            id={props.id + 'NewFactLocation'}
                            name='location'
                            prompt='Location'
                            currentValue={props.fabricProps.newFact.location}
                            options={makeCountryOptions()}
                            handleChange={event => newFactChange(event)} 
                        />
                        <FormUrlInput
                            id={props.id + 'NewFactWebsite'}
                            name='website'
                            prompt='Website'
                            currentValue={props.fabricProps.newFact.website}
                            handleChange={event => newFactChange(event)}
                        />
                        <FormTextInput 
                            id={props.id + 'NewFactNotes'}
                            name='notes'
                            prompt='Notes'
                            currentValue={props.fabricProps.newFact.notes}
                            handleChange={event => newFactChange(event)} 
                        />
                    </FormPopUp>

                    <FormTextInput
                        id='dye-fin-notes'
                        name='dyeFinNotes'
                        prompt='Whether or not the factory is listed, are there notes about the dyeing/printing/finishing mill?  If so, copy them and paste them here.'
                        currentValue={props.fabFact.dyeFinNotes}
                        handleChange={event => fabChange(event)} 
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Knitting and Weaving'
                >
                    <FormDropdown 
                        id='wov-knit-location'
                        name='wovKnitLocation'
                        prompt='Knitting or weaving location'
                        currentValue={props.fabFact.wovKnitLocation}
                        options={makeCountryOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='wov-knit-location'
                        name='wovKnitFactory'
                        prompt='Knitting/weaving fabric mill'
                        currentValue={props.fabFact.wovKnitFactory}
                        options={makeMillOptions()}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormButton 
                        buttonText='ADD A FABRIC MILL' 
                        handleClick={() => props.fabricProps.setMillPopUp(true)}
                    />

                    <FormPopUp
                        id={props.id + 'NewMill'} 
                        status={millPopUpStatus()}
                        title='New Fabric Mill'
                        close={() => handleClose()}
                        submit={() => handleClose()}
                        buttonText='SUBMIT FABRIC MILL'
                    >
                        <FormTextInput 
                            id={props.id + '-new-mill-name'}
                            name='name'
                            prompt='Fabric mill name'
                            currentValue={props.fabricProps.newMill.name}
                            handleChange={event => newMillChange(event)} 
                        />

                        <FormDropdown
                            id={props.id + 'NewMillLocation'}
                            name='location'
                            prompt='Location'
                            currentValue={props.fabricProps.newMill.location}
                            options={makeCountryOptions()}
                            handleChange={event => newMillChange(event)} 
                        />

                        <FormUrlInput
                            id={props.id + 'NewMillWebsite'}
                            name='website'
                            prompt='Website'
                            currentValue={props.fabricProps.newMill.website}
                            handleChange={event => newMillChange(event)}
                        />

                        <FormTextInput 
                            id={props.id + 'NewMillNotes'}
                            name='notes'
                            prompt='Notes'
                            currentValue={props.fabricProps.newMill.notes}
                            handleChange={event => newMillChange(event)} 
                        />
                    </FormPopUp>

                    <FormTextInput 
                        id='wov-knit-notes'
                        name='wovKnitNotes'
                        prompt='Whether or not the factory is listed, are there notes about the dyeing/printing/finishing mill?  If so, copy them and paste them here.'
                        currentValue={props.fabFact.wovKnitNotes}
                        handleChange={event => fabChange(event)} 
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Does the primary fabric have any of the following certifications?'
                >
                    <FormCheckboxSection
                        options={props.fabricProps.certificationList} 
                        selectedOptions={props.certChecks}
                        handleChange={event => fabricCertChange(event)}
                    />

                    <FormButton
                        buttonText='ADD A CERTIFICATION'
                        handleClick={() => props.fabricProps.setCertPopUp(true)}
                    />

                    <FormPopUp
                        id={props.id + 'NewCert'} 
                        status={certPopUpStatus()}
                        title='New Certification'
                        close={() => handleClose()}
                        submit={() => submitNewCert()}
                        buttonText='SUBMIT CERTIFICATION'
                    >
                        <FormTextInput 
                            id={props.id + '-new-cert-name'}
                            name='name'
                            prompt='Certification name'
                            currentValue={props.fabricProps.newCert.name}
                            handleChange={event => newCertChange(event)} 
                        />

                        <FormUrlInput
                            id={props.id + '-new-cert-website'}
                            name='website'
                            prompt='Website'
                            currentValue={props.fabricProps.newCert.website}
                            handleChange={event => newCertChange(event)}
                        />
                    </FormPopUp>
                </FormFieldset>

                <FormPromptWithSub
                    prompt='Fibers'
                    promptSubtitle='Please enter the fabric details provided on the product webpage.  If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />

                {props.fiberFieldsets.map((fiberFieldset, index) => {
                    return <fieldset key={index} className='NewProductForm__fieldset'>
                        <button
                            className='NewProductForm__remove'
                            type='button'
                            onClick={() => removeFiber(index)}
                        >
                            REMOVE
                        </button>

                        <FormDropdown 
                            id={'fiber-type-id-' + index}
                            name='fiberTypeId'
                            prompt='Fiber or material'
                            options={makeFiberOptions()}
                            currentValue={fiberFieldset.id} 
                            handleChange={event => {
                                fibersChangeInput(index, event)
                            }}
                        />

                        <FormButton
                            buttonText='ADD A FIBER OR MATERIAL TYPE'
                            handleClick={() => props.fabricProps.setFiberPopUp(true)}
                        />

                        <FormPopUp
                            id={'new-fiber'} 
                            status={fiberPopUpStatus()}
                            title='New Fiber'
                            close={() => handleClose()}
                            submit={() => submitFiber()}
                            buttonText='SUBMIT FIBER'
                        >
                            <FormTextInput 
                                id={'new-fiber-name'}
                                name='name'
                                prompt='Fiber name'
                                currentValue={props.fabricProps.newFiber.name}
                                handleChange={event => props.fabricProps.setNewFiber({name: event.target.value})} 
                            />
                        </FormPopUp>

                        <FormNumberInput 
                            id={'fiber-type-percentage-' + index}
                            name='percentage'
                            prompt='Percentage of fabric content, if available'
                            currentValue={fiberFieldset.percentage} 
                            handleChange={event => {
                                fibersChangeInput(index, event)
                            }}
                        />
    
                        <FormDropdown 
                            id={'fiber-origin' + index}
                            name='originId'
                            prompt='Fiber origin'
                            options={makeCountryOptions()}
                            currentValue={fiberFieldset.originId} 
                            handleChange={event => {
                                fibersChangeInput(index, event)
                            }}
                        />

                        <FormDropdown 
                            id={'producer-id' + index}
                            name='producerId'
                            prompt='Fiber or material producer'
                            options={makeFactoryOptions()}
                            currentValue={fiberFieldset.producerId}
                            handleChange={event => {
                                fibersChangeInput(index, event)
                            }}
                        />

                        <FormTextInput
                            id={'producer-notes' + index}
                            name='producerNotes'
                            prompt='Whether or not the producer is listed, are there notes about the fiber or material producer?  If so, copy them and paste them here.'
                            currentValue={fiberFieldset.producerNotes}
                            handleChange={event => {
                                fibersChangeInput(index, event)
                            }}
                        />

                        <FormPromptWithSub 
                            prompt=''
                            promptSubtitle='Does the primary fabric have any of the following certifications?'
                        />

                        <FormCheckboxSection
                            options={props.fabricProps.certificationList} 
                            selectedOptions={fiberCertChecks[index]}
                            handleChange={event => fiberCertChange(event, index)}
                        />

                        <FormButton
                            buttonText='ADD A CERTIFICATION'
                            handleClick={() => props.fabricProps.setCertPopUp(true)}
                        />
                    </fieldset>
                })}

                <FormButton 
                    buttonText='THIS FABRIC HAS ADDITIONAL FIBERS' 
                    handleClick={() => {
                        addAFiber()
                    }}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext'
                previousButton={() => props.fabricProps.setPage(props.fabricProps.currentPage - 1)}
                nextButton={event => nextButton(event)}
            />
        </div>
    )    
}

NPFFabrics.defaultProps = {
    fabFact: {
        dyeFinCountryId: '',
        dyeFinId: '',
        dyeFinNotes: '',
        wovKnitCountryId: '',
        wovKnitId: '',
        wovKnitNotes: ''
    },
    setFabFact: () => {},
    certChecks: {},
    setCertChecks: () => {},
    fiberFieldsets: [
        {
            fiberTypeId: 0,
            percentage: '',
            originId: 0,
            producerId: 0,
            producerNotes: '',
            certIds: []
        }
    ],
    setFiberFieldsets: () => {},
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

export default NPFFabrics