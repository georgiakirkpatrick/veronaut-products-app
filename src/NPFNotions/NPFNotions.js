import React from 'react'
import config from '../config'
import '@fortawesome/react-fontawesome'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextarea from '../FormTextarea/FormTextarea'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import TokenService from '../services/token-service'
import './NPFNotions.css'

const NPFNotions = props => {
    const {
        backPageTurns,
        fabricProps,
        fiberTypeArray,
        materialPopUp,
        newNotionMaterial,
        newNotionType,
        notFactPopUp,
        notionFields,
        notionTypeArray,
        notionTypePopUp,
        setCertChecks,
        setFiberTypeArray,
        setNewNotionMaterial,
        setNewNotionType,
        setNotFactPopUp,
        setNotionTypePopUp,
        setMaterialPopUp,
        setNotionFields,
        setNotionTypeArray
    } = props

    console.log('notionFields', notionFields)

    const notionsClass = notionFields.length === 0
        ? 'NPFNotions empty'
        : 'NPFNotions'

    const addCertification = certification => {
        fabricProps.setCertArray([
            ...fabricProps.certArray,
            {
                id: certification.id,
                name: certification.name,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ])

        setCertChecks({
            ...fabricProps.certChecks,
            [certification.name]: false
        })
    }

    const addNotion = () => {
        const initialCertChecks = fabricProps.certArray.map(c => [c.name, false])
        const initialObject = Object.fromEntries(initialCertChecks)

        setNotionFields(
            [
                ...notionFields,
                {
                    typeId: 0,
                    countryId: 0,
                    factoryId: 0,
                    notes: '',
                    materialTypeId: 0,
                    materialOriginId: 0,
                    materialProducerId: 0,
                    certIds: initialObject
                }
            ]
        )
    }

    const makeFactoryOptions = factType => {
        const factoryQty = fabricProps.factArray.length
        const factories = fabricProps.factArray.slice(1, factoryQty)
        const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formattedFacts = alphaFactories.map(factory => ({
            id: factory.id,
            text: factory.english_name,
            value: factory.id
        }))

        return [
            {
                id: 0,
                text: `Select a ${factType}`,
                value: 0
            },
            {
                id: 1,
                text: 'Not disclosed',
                value: 1
            },
            ...formattedFacts
        ]
    }

    const makeMatTypeOptions = () => {
        const matTypeQty = fabricProps.fiberTypeArray.length
        const matTypes = fabricProps.fiberTypeArray.slice(1, matTypeQty)
        const alphaMatTypes = matTypes.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const materials = alphaMatTypes.map(matType => ({
            id: matType.id,
            text: matType.english_name,
            value: matType.id
        }))

        return [
            {
                id: 0,
                text: 'Select a fiber or material',
                value: 0
            },
            {
                id: 1,
                text: 'Not disclosed',
                value: 1
            },
            ...materials
        ]
    }

    const makeNotCertArray = index => {
        const notCertArray = []

        fabricProps.certArray.forEach(cert => {
            notCertArray.push({
                ...cert,
                id: index + '-' + cert.id
            })
        })

        return notCertArray
    }

    const makeNotTypeOptions = () => {
        const notionTypes = notionTypeArray.map(notionType => {
            return {
                id: notionType.id,
                text: notionType.english_name,
                value: notionType.id
            }
        })

        const alphaNotions = notionTypes.sort((a, b) => a.text > b.text ? 1 : -1)

        return [
            {
                id: 0,
                text: 'Select a notion type',
                value: 0
            },
            ...alphaNotions
        ]
    }

    const newNotCertChangeInput = event => {
        const newCertFields = {...fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        fabricProps.setNewCert(newCertFields)
    }

    const newNotFactChangeInput = event => {
        const newNotFactFields = {...fabricProps.newFact}
        newNotFactFields[event.target.name] = event.target.value
        fabricProps.setNewFact(newNotFactFields)
    }

    const nextButton = () => { 
        if (notionFields.length === 0) {
            fabricProps.setPage(fabricProps.currentPage + 1)
        }

        notionFields.forEach(fieldset => {
            if (Number(fieldset.typeId) === 0) {
                alert(`Please select an option for each 'notion type' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.countryId) === 0) {
                alert(`Please select an option for each 'location of notion manufacturing' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.factoryId) === 0) {
                alert(`Please select an option for each 'notion manufacturer' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.materialTypeId) === 0) {
                alert(`Please select an option for each 'notion material' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else if (Number(fieldset.materialOriginId) === 0) {
                alert(`Please select an option for each 'origin of notion material' field.  Remove any unused notion sections with the 'Remove' button.`)
            } else {
                fabricProps.setPage(fabricProps.currentPage + 1)
            }
        })    
    }

    const notCertChange = (notionIndex, changeId) => {
        const updatedNotions = [...notionFields]

        updatedNotions[notionIndex].certIds[changeId] = !notionFields[notionIndex].certIds[changeId]

        setNotionFields(updatedNotions) 
    }

    const notCertPopUpStatus = () => {
        if (fabricProps.certPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const notChangeInput = (event, index) => {
        const updatedNotions = [...notionFields]
        updatedNotions[index][event.target.name] = event.target.value
        setNotionFields(updatedNotions) 
    }

    const notFactPopUpStatus = () => {
        if (notFactPopUp === true) {
            return 'FormPopUp active'
        }

        return 'FormPopUp'
    }

    const notMaterialPopUpStatus = () => {
        if (materialPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const notTypePopUpStatus = () => {
        if (notionTypePopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const previousButton = () => {
        fabricProps.setPage(fabricProps.currentPage - backPageTurns)
    }

    const removeNotion = (index) => {
        const values = [...notionFields]
        values.splice(index, 1)
        setNotionFields(values)
    }

    const submitNewCert = () => {
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
            const data = {
                "english_name": fabricProps.formatName(fabricProps.newCert.name),
                "website": fabricProps.newCert.website,
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
            fabricProps.setCertPopUp(false)
            fabricProps.setNewCert({
                name: '',
                website: ''
            })
        }
    }

    const submitNewManufacturer = index => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newFact.name),
            "country": fabricProps.newFact.countryId,
            "website": fabricProps.formatUrl(fabricProps.newFact.website),
            "notes": fabricProps.newFact.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                'Authorization': `basic ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: fabricProps.newFact.name,
            country: fabricProps.newFact.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
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
            fetch(`${process.env.REACT_APP_API_URL}/api/factories`, postRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("Server responded with an error!")
                    }
                    return response.json()
                })
                .then(newFactory => {
                    const newFactArray = [
                        ...fabricProps.factArray,
                        {
                            "id": Number(newFactory.id),
                            "english_name": newFactory.english_name,
                            "country": Number(newFactory.country),
                            "website": newFactory.website,
                            "notes": newFactory.notes,
                            "approved_by_admin": newFactory.approved_by_admin
                        }
                    ]

                    const factory = newFactArray.length
                    const factories = newFactArray.slice(1, factory)
                    const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)
                    fabricProps.setFactArray(alphaFactories)
        
                    const newNotFields = [...notionFields]
                    newNotFields[index]['factoryId'] = newFactory.id
                    setNotionFields(newNotFields)
                })

            setNotFactPopUp(false)

            fabricProps.setNewFact({
                name: '',
                countryId: 0,
                website: '',
                notes: ''
            })
        }
    }

    const submitNewMaterial = index => {
        const data = {
            "english_name": fabricProps.formatName(newNotionMaterial),
            "fiber_type_class": "undetermined"
        }

        const postRequestParams = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        }

        if (newNotionMaterial === '') {
            alert(`Please enter a new material.`)
        } else {
            fetch(`${process.env.REACT_APP_API_URL}/api/fibers/fiber-types`, 
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(newMaterial => {
                const matTypes = [
                    ...fiberTypeArray,
                    newMaterial
                ]

                const alphaMatTypes = matTypes.sort((a, b) => a.english_name > b.english_name ? 1 : -1)
                setFiberTypeArray(alphaMatTypes)
                const newNotionFields = [...notionFields]
                newNotionFields[index]['materialTypeId'] = newMaterial.id
    
                setNotionFields(newNotionFields)
            })
        }

        setNewNotionMaterial('')
        setMaterialPopUp(false)
    }

    const submitNewNotType = index => {
        const data = {
            "english_name": newNotionType,
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

        if (newNotionType === '') {
            alert('Please enter a notion type')
        } else {
            fetch(
                `${process.env.REACT_APP_API_URL}/api/notions/notion-types`,
                postRequestParams
            )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responded with an error!")
                }
    
                return response.json()
            })
            .then(newNotionType => {
                const newNotionArray = [
                    ...notionTypeArray,
                    {
                        "id": newNotionType.id,
                        "english_name": fabricProps.formatName(newNotionType.english_name),
                        "approved_by_admin": newNotionType.approved_by_admin,
                        "createdAt": newNotionType.created_at
                    }
                ]
    
                const alphaNotions = newNotionArray.sort((a, b) => a.english_name > b.english_name ? 1 : -1)
                setNotionTypeArray(alphaNotions)
    
                const newNotionFields = [...notionFields]
                newNotionFields[index]['typeId'] = newNotionType.id
                setNotionFields(newNotionFields)
            })
            
            setNotionTypePopUp(false)
            setNewNotionType('')
        }
    }

    return (
        <div id='notions' className={notionsClass}>
            <FormPage title='Notions'>
                <FormPromptWithSub
                    prompt='If the product includes notions such as zippers or buttons, list them here.'
                    promptSubtitle='If the product does not include notions, skip this section.'
                />
                    {notionFields.map((notion, index) => {
                        return (
                            <li key={index}>
                                <FormFieldset key={index}>
                                    <button
                                        className='NewProductForm__remove'
                                        type='button'
                                        onClick={() => removeNotion(index)}
                                    >
                                        REMOVE
                                    </button>

                                    <FormDropdown
                                        id={'notion-type-' + index}
                                        name='typeId'
                                        prompt='Notion type'
                                        currentValue={notion.typeId}
                                        options={makeNotTypeOptions()}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />

                                    <FormPromptWithSub
                                        promptSubtitle='Notion type not listed?'
                                    />
                    
                                    <FormButton
                                        buttonText='Add a notion type'
                                        handleClick={() => setNotionTypePopUp(true)}
                                    />

                                    <FormPopUp
                                        id='notion-type-pop-up'
                                        status={notTypePopUpStatus()}
                                        title='Add a Notion Type'
                                        close={() => setNotionTypePopUp(false)}
                                        submit={() => submitNewNotType(index)}
                                        buttonText='Submit notion type'
                                    >
                                        <FormTextInput 
                                            id='new-not-type'
                                            name='newNotType'
                                            prompt='Notion type name' 
                                            currentValue={newNotionType}
                                            handleChange={event => setNewNotionType(event.target.value)}
                                        />
                                    </FormPopUp>
                    
                                    <FormDropdown
                                        id={'notion-location-' + index}
                                        name='countryId'
                                        prompt='Location of notion manufacturing'
                                        currentValue={notion.countryId}
                                        options={fabricProps.countries}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />
                    
                                    <FormDropdown
                                        id={'notion-factory-' + index}
                                        name='factoryId'
                                        prompt='Notion manufacturer'
                                        currentValue={notion.factoryId}
                                        options={makeFactoryOptions('manufacturer')}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />

                                    <FormPromptWithSub
                                        promptSubtitle='Manufacturer not listed?'
                                    />

                                    <FormButton
                                        buttonText='Add a manufacturer'
                                        handleClick={() => setNotFactPopUp(true)}
                                    />

                                    <FormPopUp
                                        id='notion-factory-pop-up'
                                        status={notFactPopUpStatus()}
                                        title='Add a Manufacturer'
                                        close={() => setNotFactPopUp(false)}
                                        submit={() => submitNewManufacturer(index)}
                                        buttonText='Submit manufacturer'
                                    >
                                        <FormPromptWithSub prompt='Add a notion manufacturer' promptSubtitle='' />
                                        
                                        <FormTextInput 
                                            id='notion-factory-name'
                                            name='name'
                                            prompt='Factory name' 
                                            currentValue={fabricProps.newFact.name}
                                            handleChange={event => newNotFactChangeInput(event)} 
                                        />
                                        
                                        <FormDropdown
                                            id='notion-factory-location' 
                                            name='countryId'
                                            prompt='Location'
                                            currentValue={fabricProps.newFact.countryId}
                                            options={fabricProps.countries}
                                            handleChange={event => newNotFactChangeInput(event)}
                                        />
                                        
                                        <FormUrlInput 
                                            id='notion-factory-website'
                                            name='website'
                                            prompt='Website'
                                            currentValue={fabricProps.newFact.website}
                                            handleChange={event => newNotFactChangeInput(event)}
                                        />
                                        
                                        <FormTextInput
                                            id='notion-factory-notes'
                                            name='notes'
                                            prompt='Notes'
                                            currentValue={fabricProps.newFact.notes}
                                            handleChange={event => newNotFactChangeInput(event)}
                                        />
                                    </FormPopUp>

                                    <FormDropdown
                                        id={'notion-material-type-' + index}
                                        name='materialTypeId'
                                        prompt='Notion material'
                                        currentValue={notion.materialTypeId}
                                        options={makeMatTypeOptions()}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />

                                    <FormPromptWithSub
                                        promptSubtitle='Material type not listed?'
                                    />

                                    <FormButton
                                        buttonText='Add a material type'
                                        handleClick={() => setMaterialPopUp(true)}
                                    />

                                    <FormPopUp
                                        id='new-material'
                                        status={notMaterialPopUpStatus()}
                                        title='Add a Material'
                                        close={() => setMaterialPopUp(false)}
                                        submit={() => submitNewMaterial(index)}
                                        buttonText='Submit material'
                                    >
                                        <FormTextInput
                                            id='new-material-name'
                                            name='name'
                                            prompt='Material name'
                                            currentValue={newNotionMaterial}
                                            handleChange={event => {
                                                setNewNotionMaterial(event.target.value)
                                            }}
                                        />
                                    </FormPopUp>

                                    <FormDropdown
                                        id={'notion-material-origin-id-' + index}
                                        name='materialOriginId'
                                        prompt='Origin of notion material'
                                        currentValue={notion.materialOriginId}
                                        options={fabricProps.countries}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />

                                    <FormDropdown
                                        id={'notion-material-producer-id-' + index}
                                        name='materialProducerId'
                                        prompt='Notion material producer'
                                        currentValue={notion.materialProducerId}
                                        options={makeFactoryOptions('producer')}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />

                                    <FormPromptWithSub
                                        promptSubtitle='Manufacturer not listed?'
                                    />

                                    <FormButton
                                        buttonText='Add a manufacturer'
                                        handleClick={() => setNotFactPopUp(true)}
                                    />

                                    <p>Does the notion have any of the following cerfications?</p>
                                    <FormCheckboxSection
                                        id={'notion-certifications' + index}
                                        name='certIds'
                                        options={makeNotCertArray(index)}
                                        selectedOptions={notion.certIds}
                                        handleChange={event => notCertChange(index, event.target.id)}
                                    />

                                    <FormPromptWithSub
                                        promptSubtitle='Certification not listed?'
                                    />

                                    <FormButton 
                                        buttonText='Add a certification'
                                        handleClick={() => fabricProps.setCertPopUp(true)} 
                                    />

                                    <FormPopUp
                                        id='not-cert-pop-up'
                                        status={notCertPopUpStatus()}
                                        title='New Certification'
                                        close={() => fabricProps.setCertPopUp(false)}
                                        submit={() => submitNewCert()}
                                        buttonText='Submit certification'
                                    >
                                        <FormPromptWithSub prompt='Add a certification' promptSubtitle='' />

                                        <FormTextInput 
                                            id='not-cert-name'
                                            name='name'
                                            prompt='Certification name'
                                            currentValue={fabricProps.newCert.name}
                                            handleChange={event => newNotCertChangeInput(event)} 
                                        />

                                        <FormUrlInput
                                            id='not-cert-website'
                                            name='website'
                                            prompt='Website'
                                            currentValue={fabricProps.newCert.website}
                                            handleChange={event => newNotCertChangeInput(event)}
                                        />
                                    </FormPopUp>
                    
                                    <FormTextarea
                                        id={'notes' + index}
                                        name='notes'
                                        prompt='If the brand offers additional information about notion materials or manufacturing, include them here.' 
                                        currentValue={notion.notes}
                                        handleChange={event => notChangeInput(event, index)} 
                                    />
                                </FormFieldset>

                            {notionFields.length < index
                                ? <FormPromptWithSub
                                    promptSubtitle='Does the product have additional notions?'
                                />
                                : null
                            }
                            </li>
                        )
                    })}

                <FormButton
                    buttonText='Add a notion'
                    handleClick={() => addNotion()}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext'
                previousButton={() => previousButton()}
                nextButton={() => nextButton()}
            />
        </div>
    )
}

NPFNotions.defaultProps = {
    fabricProps: {
        certArray: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        factArray: [],
        fiberTypeArray: [],
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
        setCertArray: () => {},
        setFiberTypeArray: () => {},
        setFactArray: () => {},
        setCertPopUp: () => {},
        setNewCert: () => {},
        setNewFact: () => {},
        setPage: () => {},
    },
    materialPopUp: false,
    newNotionType: '',
    notFactPopUp: false,
    notionFields: [
        {
            typeId: 0,
            materialTypeId: 0,
            countryId: 0,
            materialOriginId: 0,
            factoryId: 0,
            notes: ''
        }
    ],
    notionTypeArray: [],
    notionTypePopUp: false,
    setCertChecks: () => {},
    setMaterialPopUp: () => {},
    setNotFactPopUp: () => {},
    setNewNotionType: () => {},
    setNotionFields: () => {},
    setNotionTypeArray: () => {},
    setNotionTypePopUp: () => {}
}

export default NPFNotions