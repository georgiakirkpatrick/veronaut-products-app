import React from 'react'
import config from '../config'
import FormButton from '../FormButton/FormButton'
import FormCheckboxSection from '../FormCheckboxSection/FormCheckboxSection'
import FormDropdown from '../FormDropdown/FormDropdown'
import FormFieldset from '../FormFieldset/FormFieldset'
import FormNumberInput from '../FormNumberInput/FormNumberInput'
import FormPage from '../FormPage/FormPage'
import FormPopUp from '../FormPopUp/FormPopUp'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextarea from '../FormTextarea/FormTextarea'
import FormTextInput from '../FormTextInput/FormTextInput'
import FormUrlInput from '../FormUrlInput/FormUrlInput'
import NPFFooter from '../NPFFooter/NPFFooter'
import './NPFFabrics.css'

const NPFFabrics = props => {
    const { 
        certChecks,
        fabFact,
        fabricProps,
        fiberFieldsets,
        id,
        linBackPageTurns,
        pageTurns,
        setFabFact,
        setFiberFieldsets,
        setCertChecks,
        title
    } = props

    const addCertification = certification => {
        fabricProps.setCertificationList([
            ...fabricProps.certificationList,
            {
                id: certification.id,
                name: certification.name,
                text: certification.english_name,
                website: certification.website,
                approved: certification.approved_by_admin
            }
        ])

        fabricProps.setInitCerts({
            ...fabricProps.initCerts,
            [certification.name]: false
        })
    }

    const addFactory = newFactory => {
        fabricProps.setFactoryList([
            ...fabricProps.factoryList,
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

    const addFiber = () => {
        const initialCertChecks = fabricProps.certificationList.map(c => [c.name, false])
        const initialObject = Object.fromEntries(initialCertChecks)

        setFiberFieldsets([
            ...fiberFieldsets,
            {
                fiberTypeId: 0,
                percentage: '',
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: initialObject
            }
        ])
    }

    const addFiberType = newFiberType => {
        fabricProps.setFiberTypeList([
            ...fabricProps.fiberTypeList,
            newFiberType
        ])
    }

    const certPopUpStatus = () => {
        if (fabricProps.certPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const handleClose = () => {
        fabricProps.setCertPopUp(false)
        fabricProps.setDyeFactPopUp(false)
        fabricProps.setFiberPopUp(false)
        fabricProps.setMillPopUp(false)
        fabricProps.setProducerPopUp(false)
    }

    const fabCertChange = event => {
        setCertChecks({
            ...certChecks, 
            [event.target.name]: !certChecks[event.target.name]
        })
    }

    const fabChange = event => {
        const fabFields = {...fabFact}
        fabFields[event.target.name] = event.target.value
        setFabFact(fabFields)
    }

    const factPopUpStatus = () => {
        if (fabricProps.dyeFactPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const fibCertChange = (fiberIndex, certName) => {
        const updatedFibers = [...fiberFieldsets]
    
        updatedFibers[fiberIndex].certIds[certName] = !fiberFieldsets[fiberIndex].certIds[certName]
        setFiberFieldsets(updatedFibers)
    }

    const fibChangeNum = (index, event) => {
        const values = [...fiberFieldsets]
        values[index][event.target.name] = Number(event.target.value)
        setFiberFieldsets(values)
    }

    const fibChangeText = (index, event) => {
        const values = [...fiberFieldsets]
        values[index][event.target.name] = event.target.value
        setFiberFieldsets(values)
    }

    const fibPopUpStatus = () => {
        if (fabricProps.fiberPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const makeFactoryOptions = factType => {
        const factoryQty = fabricProps.factoryList.length
        const factories = fabricProps.factoryList.slice(1, factoryQty)
        const alphaFactories = factories.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formatedFactories = alphaFactories.map(mill => (
            {
                id: mill.id,
                text: mill.english_name,
                value: mill.id
            }
        ))

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
            ...formatedFactories
        ]
    }

    const makeFiberOptions = () => {
        const fiberQty = fabricProps.fiberTypeList.length
        const fibers = fabricProps.fiberTypeList.slice(1, fiberQty)
        const alphaFibers = fibers.sort((a, b) => a.english_name > b.english_name ? 1 : -1)

        const formattedFibers = alphaFibers.map(fiberType => (
            {
                id: fiberType.id,
                text: fiberType.english_name,
                value: fiberType.id
            }
        ))
        
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
            ...formattedFibers
        ]
    }

    const millPopUpStatus = () => {
        if (fabricProps.millPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }
    
    const newCertChange = event => {
        const newCertFields = {...fabricProps.newCert}
        newCertFields[event.target.name] = event.target.value
        fabricProps.setNewCert(newCertFields)
    }

    const newFactChange = event => {
        const newFields = {...fabricProps.newFact}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        fabricProps.setNewFact(newFields)
    }

    const newMillChange = event => {
        const newFields = {...fabricProps.newMill}
        newFields[event.target.name] = event.target.value
        fabricProps.setNewMill(newFields)
    }

    const newProducerChange = event => {
        const newFields = {...fabricProps.newProducer}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        newFields[event.target.name] = event.target.value
        fabricProps.setNewProducer(newFields)
    }

    const nextButton = () => {
        const missingFabricFields = []

        const requiredFabFields = {
            'dyeFinCountryId': 'dyeing and finishing country',
            'dyeFinId': 'dyeing and finishing factory',
            'wovKnitCountryId': 'knitting or weaving country',
            'wovKnitId': 'knitting or weaving fabric mill'
        }

        Object.keys(requiredFabFields).forEach(key => {
            if (Number(fabFact[key]) === 0) {
                missingFabricFields.push(requiredFabFields[key])
            }
        })
            
        if (missingFabricFields.length === 1) {
            alert(`Please complete the '${missingFabricFields[0]}' field`)
        } else if (missingFabricFields.length > 1) {
            alert(`Please complete the following fields: ${missingFabricFields.map(field => `
                ${field}`)}
            `)
        } else if (missingFabricFields.length === 0) {
            fiberFieldsets.forEach(fiber => {
                if (Number(fiber.fiberTypeId) === 0) {
                    alert(`Please select an option for each 'fiber type' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else if (Number(fiber.originId) === 0) {
                    alert(`Please select an option for each 'fiber origin' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else if (Number(fiber.producerId) === 0) {
                    alert(`Please select an option for each 'fiber producer' field.  Remove any unused fiber sections with the 'remove' button.`)
                } else {
                    fabricProps.setPage(fabricProps.currentPage + pageTurns)
                }
            })
        }
    }

    const prevButton = id === 'lin' ? () => fabricProps.setPage(fabricProps.currentPage -linBackPageTurns) : () => fabricProps.setPage(fabricProps.currentPage - 1)

    const prodPopUpStatus = () => {
        if (fabricProps.producerPopUp === true) {
            return 'FormPopUp active'
        }
        return 'FormPopUp'
    }

    const removeFiber = (index) => {
        const values = [...fiberFieldsets]
        values.splice(index, 1)
        setFiberFieldsets(values)
    }

    const clearFactPopUpFields = () => {
        fabricProps.setNewFact({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })

        fabricProps.setNewMill({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })

        fabricProps.setNewProducer({
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        })
    }

    const submitDyeFactory = () => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newFact.name),
            "country": fabricProps.newFact.countryId,
            "website": fabricProps.formatUrl(fabricProps.newFact.website),
            "notes": fabricProps.newFact.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
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
                const fabFactory = {...fabFact}
                fabFactory.dyeFinId = responseJson.id
                setFabFact(fabFactory)
            })

            handleClose()
            clearFactPopUpFields()
        }
    }

    const submitFiber = () => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newFiber.name)
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        if (fabricProps.newFiber.name === '') {
            alert(`Please enter a new fiber.`)
        } else {
            fetch(`${config.API_URL}/api/fibers/fiber-types`,
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

            fabricProps.setFiberPopUp(false)
            fabricProps.setNewFiber({
                name: ''
            })
        }
    }

    const submitFibProducer = index => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newProducer.name),
            "country": fabricProps.newProducer.countryId,
            "website": fabricProps.formatUrl(fabricProps.newProducer.website),
            "notes": fabricProps.newProducer.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: fabricProps.newProducer.name,
            country: fabricProps.newProducer.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
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
                const fiberArray = [...fiberFieldsets]
                fiberArray[index].producerId = responseJson.id
                setFabFact(fiberArray)
            })

            handleClose()
            clearFactPopUpFields()
        }
    }

    const submitMill = () => {
        const data = {
            "english_name": fabricProps.formatName(fabricProps.newMill.name),
            "country": fabricProps.newMill.countryId,
            "website": fabricProps.formatUrl(fabricProps.newMill.website),
            "notes": fabricProps.newMill.notes
        }

        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const requiredFields = {
            english_name: fabricProps.newMill.name,
            country: fabricProps.newMill.countryId
        }

        const missingFields = []

        Object.keys(requiredFields).forEach(key => {
            if (requiredFields[key] === '' || requiredFields[key] === 0) {
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
                const newFactory = {...fabFact}
                newFactory.wovKnitId = responseJson.id
                setFabFact(newFactory)
            })

            fabricProps.setMillPopUp(false)
            fabricProps.setNewMill({
                name: '',
                countryId: 0,
                website: '',
                notes: ''
            })
        }
    }

    const submitNewCert = () => {
        const missingFields = []

        Object.keys(fabricProps.newCert.name).forEach(key => {
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
                "website": fabricProps.formatUrl(fabricProps.newCert.website),
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
            fabricProps.setCertPopUp(false)
            fabricProps.setNewCert({
                name: '',
                website: ''
            })
        }    
    }

    return (
        <div id='fabrics' className='NPFFabrics'>
            <FormPage title={title}>
                <FormPromptWithSub
                    prompt='Please enter the fabric details provided on the product webpage.'
                    promptSubtitle='If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />

                <FormFieldset
                    prompt='Fabric Dyeing, Printing, and Finishing'
                >
                    <FormDropdown
                        id='dye-finish-country-id'
                        name='dyeFinCountryId'
                        prompt='Dyeing and finishing country'
                        currentValue={fabFact.dyeFinCountryId}
                        options={fabricProps.countries}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown
                        id='dye-fin-id'
                        name='dyeFinId'
                        prompt='Dyeing and finishing factory'
                        currentValue={fabFact.dyeFinId}
                        options={makeFactoryOptions('factory')}
                        handleChange={event => fabChange(event)} 
                    />
                    
                    <FormPromptWithSub
                        promptSubtitle='Factory not listed above?'
                    />

                    <FormButton 
                        buttonText='Add a factory' 
                        handleClick={() => fabricProps.setDyeFactPopUp(true)}
                    />

                    <FormTextarea
                        currentValue={fabFact.dyeFinNotes}
                        handleChange={event => fabChange(event)}
                        id='dye-fin-notes'
                        name='dyeFinNotes'
                        prompt='Whether or not the factory is listed, are there notes about the dyeing/printing/finishing mill?  If so, copy them and paste them here.'
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Knitting and Weaving'
                >
                    <FormDropdown 
                        id='wov-knit-country-id'
                        name='wovKnitCountryId'
                        prompt='Knitting or weaving country'
                        currentValue={fabFact.wovKnitCountryId}
                        options={fabricProps.countries}
                        handleChange={event => fabChange(event)} 
                    />

                    <FormDropdown 
                        id='wov-knit-id'
                        name='wovKnitId'
                        prompt='Knitting/weaving fabric mill'
                        currentValue={fabFact.wovKnitId}
                        options={makeFactoryOptions('fabric mill')}
                        handleChange={event => fabChange(event)} 
                    />
                    
                    <FormPromptWithSub
                        promptSubtitle='Factory not listed above?'
                    />

                    <FormButton 
                        buttonText='Add a fabric mill' 
                        handleClick={() => fabricProps.setMillPopUp(true)}
                    />

                    <FormTextarea
                        currentValue={fabFact.wovKnitNotes}
                        handleChange={event => fabChange(event)}
                        id='wov-knit-notes'
                        name='wovKnitNotes'
                        prompt='Whether or not the fabric mill is listed, are there notes about where the fabric or material was made?  If so, copy them and paste them here.'
                    />
                </FormFieldset>

                <FormFieldset
                    prompt='Does the primary fabric have any of the following certifications?'
                >
                    <FormCheckboxSection
                        options={fabricProps.certificationList} 
                        selectedOptions={certChecks}
                        handleChange={event => fabCertChange(event)}
                    />

                    <FormPromptWithSub
                        promptSubtitle='Certification not listed above?'
                    />

                    <FormButton
                        buttonText='Add a certification'
                        handleClick={() => {
                            fabricProps.setCertPopUp(true)
                        }}
                    />
                </FormFieldset>

                <FormPromptWithSub
                    prompt='Fibers'
                    promptSubtitle='Please enter the fabric details provided on the product webpage.  If the product page does not provide the information detailed below, please select "not disclosed" from the dropdown.'
                />

                {fiberFieldsets.map((fiberFieldset, index) => {
                    const fiberCertOptions = () => {
                        const formattedCerts = fabricProps.certificationList.map(cert => (
                            {
                                ...cert,
                                id: index + '-' + cert.id
                            }
                        ))
                        return formattedCerts
                    }
                    
                    return <fieldset key={'fiber-fieldset' + index} className='FormFieldset'>
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
                            currentValue={fiberFieldset.fiberTypeId} 
                            handleChange={event => {fibChangeNum(index, event)}}
                        />

                        <FormPromptWithSub
                            promptSubtitle='Fiber or material not listed above?'
                        />

                        <FormButton
                            buttonText='Add a fiber or material type'
                            handleClick={() => fabricProps.setFiberPopUp(true)}
                        />

                        <FormNumberInput 
                            id={'fiber-type-percentage-' + index}
                            name='percentage'
                            prompt='Percentage of fabric content, if available'
                            currentValue={fiberFieldset.percentage === 0 ? '' : fiberFieldset.percentage} 
                            handleChange={event => {fibChangeNum(index, event)}}
                        />
    
                        <FormDropdown 
                            id={'fiber-origin' + index}
                            name='originId'
                            prompt='Fiber origin'
                            options={fabricProps.countries}
                            currentValue={fiberFieldset.originId} 
                            handleChange={event => {fibChangeNum(index, event)}}
                        />

                        <FormDropdown 
                            id={'producer-id' + index}
                            name='producerId'
                            prompt='Fiber or material producer'
                            options={makeFactoryOptions('producer')}
                            currentValue={fiberFieldsets.producerId}
                            handleChange={event => {fibChangeNum(index, event)}}
                        />

                        <FormPromptWithSub
                            promptSubtitle='Producer not listed above?'
                        />

                        <FormButton 
                            buttonText='Add a producer'
                            handleClick={() => {
                                fabricProps.setProducerPopUp(true)
                            }}
                        />

                        <FormPopUp
                            id={'fabric' + id + 'NewFibProducer'} 
                            status={prodPopUpStatus()}
                            title='New Producer'
                            close={() => handleClose()}
                            submit={() => submitFibProducer(index)}
                            buttonText='Submit Factory'
                        >
                            <FormTextInput 
                                id={id + 'NewProducerName'}
                                name='name'
                                prompt='Factory name'
                                currentValue={fabricProps.newProducer.name}
                                handleChange={event => newProducerChange(event)} 
                            />

                            <FormDropdown
                                id={id + 'NewProducerLocation'}
                                name='countryId'
                                prompt='Location'
                                currentValue={fabricProps.newProducer.countryId}
                                options={fabricProps.countries}
                                handleChange={event => newProducerChange(event)} 
                            />

                            <FormUrlInput
                                id={id + 'NewProducerWebsite'}
                                name='website'
                                prompt='Website'
                                currentValue={fabricProps.newProducer.website}
                                handleChange={event => newProducerChange(event)}
                            />

                            <FormTextarea
                                currentValue={fabricProps.newProducer.notes}
                                handleChange={event => newProducerChange(event)} 
                                id={id + 'NewProducerNotes'}
                                name='notes'
                                prompt='Notes'
                            />
                        </FormPopUp>

                        <FormTextarea
                            currentValue={fiberFieldset.producerNotes}
                            handleChange={event => {fibChangeText(index, event)}}
                            id={'producer-notes' + index}
                            name='producerNotes'
                            prompt='Whether or not the producer is listed, are there notes about the fiber or material producer?  If so, copy them and paste them here.'
                        />

                        <FormPromptWithSub 
                            prompt=''
                            promptSubtitle='Does the fiber have any of the following certifications?'
                        />

                        <FormCheckboxSection
                            id={'fabric-certifications' + index}
                            name='certIds'
                            options={fiberCertOptions()} 
                            selectedOptions={fiberFieldset.certIds}
                            handleChange={event => fibCertChange(index, event.target.name)}
                        />

                        <FormPromptWithSub
                            promptSubtitle='Certification not listed above?'
                        />

                        <FormButton
                            buttonText='Add a certification'
                            handleClick={() => {
                                fabricProps.setCertPopUp(true)
                            }}
                        />
                    </fieldset>
                })}

                <FormPromptWithSub
                    promptSubtitle='Does this fabric have more than one fiber?'
                />

                <FormButton 
                    buttonText='Add a fiber' 
                    handleClick={() => {addFiber()}}
                />
            </FormPage>

            <NPFFooter 
                buttons='prevNext'
                previousButton={prevButton}
                nextButton={() => nextButton()}
            />

            <FormPopUp
                id={id + 'NewFact'} 
                status={factPopUpStatus()}
                title='New Factory'
                close={() => handleClose()}
                submit={() => submitDyeFactory()}
                buttonText='Submit Factory'
            >
                <FormTextInput 
                    id={id + 'NewFactName'}
                    name='name'
                    prompt='Factory name'
                    currentValue={fabricProps.newFact.name}
                    handleChange={event => newFactChange(event)} 
                />
                <FormDropdown
                    id={id + 'NewFactLocation'}
                    name='countryId'
                    prompt='Location'
                    currentValue={fabricProps.newFact.countryId}
                    options={fabricProps.countries}
                    handleChange={event => newFactChange(event)} 
                />
                <FormUrlInput
                    id={id + 'NewFactWebsite'}
                    name='website'
                    prompt='Website'
                    currentValue={fabricProps.newFact.website}
                    handleChange={event => newFactChange(event)}
                />
                <FormTextarea
                    currentValue={fabricProps.newFact.notes}
                    handleChange={event => newFactChange(event)} 
                    id={id + 'NewFactNotes'}
                    name='notes'
                    prompt='Notes'
                />
            </FormPopUp>

            <FormPopUp
                id={id + 'NewMill'} 
                status={millPopUpStatus()}
                title='New Fabric Mill'
                close={() => handleClose()}
                submit={() => submitMill()}
                buttonText='Submit fabric mill'
            >
                <FormTextInput 
                    id={id + '-new-mill-name'}
                    name='name'
                    prompt='Fabric mill name'
                    currentValue={fabricProps.newMill.name}
                    handleChange={event => newMillChange(event)} 
                />

                <FormDropdown
                    id={id + 'NewMillLocation'}
                    name='countryId'
                    prompt='Location'
                    currentValue={fabricProps.newMill.countryId}
                    options={fabricProps.countries}
                    handleChange={event => newMillChange(event)} 
                />

                <FormUrlInput
                    id={id + 'NewMillWebsite'}
                    name='website'
                    prompt='Website'
                    currentValue={fabricProps.newMill.website}
                    handleChange={event => newMillChange(event)}
                />

                <FormTextarea
                    currentValue={fabricProps.newMill.notes}
                    handleChange={event => newMillChange(event)}
                    id={id + 'NewMillNotes'}
                    name='notes'
                    prompt='Notes'
                />
            </FormPopUp>

            <FormPopUp
                id={'new-fiber'} 
                status={fibPopUpStatus()}
                title='New Fiber'
                close={() => handleClose()}
                submit={() => submitFiber()}
                buttonText='Submit fiber'
            >
                <FormTextInput 
                    id={'new-fiber-name'}
                    name='name'
                    prompt='Fiber name'
                    currentValue={fabricProps.newFiber.name}
                    handleChange={event => {
                        fabricProps.setNewFiber(
                            {
                                name: event.target.value
                            }
                        )
                    }} 
                />
            </FormPopUp>

            <FormPopUp
                id={id + 'NewCert'} 
                status={certPopUpStatus()}
                title='New Certification'
                close={() => handleClose()}
                submit={() => submitNewCert()}
                buttonText='Submit certification'
            >
                <FormTextInput 
                    id={id + '-new-cert-name'}
                    name='name'
                    prompt='Certification name'
                    currentValue={fabricProps.newCert.name}
                    handleChange={event => newCertChange(event)} 
                />

                <FormUrlInput
                    id={id + '-new-cert-website'}
                    name='website'
                    prompt='Website'
                    currentValue={fabricProps.newCert.website}
                    handleChange={event => newCertChange(event)}
                />
            </FormPopUp>
        </div>
    )    
}

NPFFabrics.defaultProps = {
    certChecks: {},
    fabFact: {
        dyeFinCountryId: '',
        dyeFinId: '',
        dyeFinNotes: '',
        wovKnitCountryId: '',
        wovKnitId: '',
        wovKnitNotes: ''
    },
    fabricProps: {
        certificationList: [],
        certPopUp: false,
        countries: [],
        currentPage: 0,
        dyeFactPopUp: false,
        initCerts: {},
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
        newProducer: {
            name: '',
            countryId: 0,
            website: '',
            notes: ''
        },
        producerPopUp: false,
        setCertificationList: () => {},
        setFiberTypeList: () => {},
        setCertPopUp: () => {},
        setDyeFactPopUp: () => {},
        setFactoryList: () => {},
        setFiberPopUp: () => {},
        setInitCerts: () => {},
        setMillPopUp: () => {},
        setNewCert:  () => {},
        setNewFact:  () => {},
        setNewFiber: () => {},
        setNewMill: () => {},
        setNewProducer: () => {},
        setPage: () => {},
        setProducerPopUp: () => {}
    },
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
    id: 1,
    pageTurns: 0,
    setFabFact: () => {},
    setCertChecks: () => {},
    setFiberFieldsets: () => {},
    title: ''
}

export default NPFFabrics