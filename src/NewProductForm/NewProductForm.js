import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import countries from '../COUNTRIES'
import currencies from '../CURRENCIES'
import formData from '../FORM_DATA'
import FormPage from '../FormPage/FormPage'
import FormButton from '../FormButton/FormButton'
import NPFBrand from '../NPFBrand/NPFBrand'
import NPFColors from '../NPFColors/NPFColors'
import NPFFooter from '../NPFFooter/NPFFooter'
import NPFFabrics from '../NPFFabrics/NPFFabrics'
import NPFFabricsQuestion from '../NPFFabricsQuestion/NPFFabricsQuestion'
import NPFImages from '../NPFImages/NPFImages'
import NPFManufacturing from '../NPFManufacturing/NPFManufacturing'
import NPFNewProduct from '../NPFNewProduct/NPFNewProduct'
import NPFNotions from '../NPFNotions/NPFNotions'
import NPFPermittedCategories from '../NPFPermittedCategories/NPFPermittedCategories'
import NPFProhibFibers from '../NPFProhibFibers/NPFProhibFibers'
import NPFSizes from '../NPFSizes/NPFSizes'
import NPFSubmit from '../NPFSubmit/NPFSubmit'
import config from '../config'
import './NewProductForm.css'

const makeCurrencyOptions = currencies.map((currency, index) => {
    return {
        id: index + 1, 
        text: `${currency.code} - ${currency.name_plural} (${currency.symbol_native})`,
        value: index + 1 
    }
})

const NewProductForm = props => {
    const { certificationList, setCertificationList } = props
    console.log('certificationList', certificationList)

    const [factoryList, setFactoryList] = useState([])
    const [fiberTypeList, setFiberTypeList] = useState([])
    const [notionTypeList, setNotionTypeList] = useState([])

    useEffect(() => {
        const getRequestParams = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }
        
        const getFactories = () => {
          fetch(`${config.API_URL}/api/factories`, getRequestParams)
            .then(response => {
                if (response.status >= 400) {
                    console.log('There was a problem.  Status code: ' + response.status)
                    throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(factoryArray => {
                setFactoryList(factoryArray)
            })
        }

        const getFiberTypes = () => {
            fetch(`${config.API_URL}/api/fibers/fiber-types`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        console.log('There was a problem.  Status code: ' + response.status)
                        throw new Error('Server responded with an error!')
                    }
                    return response.json()
                })
                .then(fiberTypeList => {
                    setFiberTypeList(fiberTypeList)
                })
        }

        const getNotionsTypes = () => {
            fetch(`${config.API_URL}/api/fabrics/notion-types`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        console.log('There was a problem.  Status code: ' + response.status)
                        throw new Error("Server responded with an error!")
                    }
                    return response.json()
                })
                .then(notionTypeArray => {
                    setNotionTypeList(notionTypeArray)
                })
            }
        getFactories()
        getFiberTypes()
        getNotionsTypes()
    }, [])

// STATE
    // FORM PAGE
    const [currentPage, setPage] = useState(0)

    // BRAND STATE
    const [brandList, setBrandList] = useState([])
    const [brandPopUp, setBrandPopUp] = useState(false)
    const [newBrandFields, setNewBrandFields] = useState(
        {
            name: '',
            website: '',
            currency: 0,
            sizeSystem: 0
        }
    )

    // CERTIFICATIONS
    const [initCerts, setInitCerts] = useState({})
    const initialCertChecks = certificationList.map(c => [c.name, false])
    const initialObject = Object.fromEntries(initialCertChecks)

    // COLOR AND IMAGE STATE
    const [colorFieldsets, setColorFieldsets] = useState([
        { 
            name: '',
            descriptionId: 0,
            swatchUrl: '',
            imageUrls: ['']
        }
    ])

    // FABRICS QUESTION STATE
    const [primCheck, setPrimCheck] = useState(true)
    const [secCheck, setSecCheck] = useState(false)
    const [linCheck, setLinCheck] = useState(false)

    // FABRICS
    const [primPageTurns, setPrimPageTurns] = useState(3)
    const [secPageTurns, setSecPageTurns] = useState(2)
    const linPageTurns = 1
    const [backPageTurns, setBackPageTurns] = useState(3)
    const [newCert, setNewCert] = useState({
        name: '',
        website: ''
    })
    const [newFact, setNewFact] = useState({
        name: '',
        countryId: 0,
        website: '',
        notes: ''
    })
    const [newFiber, setNewFiber] = useState({
        name: ''
    })

    const [newMill, setNewMill] = useState({
        name: '',
        countryId: 0,
        website: '',
        notes: ''
    })
    const [newProducer, setNewProducer] = useState({
        name: '',
        countryId: 0,
        website: '',
        notes: ''
    })
    const [certPopUp, setCertPopUp] = useState(false)
    const [dyeFactPopUp, setDyeFactPopUp] = useState(false)
    const [fiberPopUp, setFiberPopUp] = useState(false)
    const [millPopUp, setMillPopUp] = useState(false)
    const [producerPopUp, setProducerPopUp] = useState(false)

    console.log('millPopUp', millPopUp)

        // PRIMARY FABRIC STATE
        const [primCertChecks, setPrimCertChecks] = useState(initialObject)
        const [primFabFact, setPrimFabFact] = useState({
            dyeFinCountryId: 0,
            dyeFinId: 0,
            dyeFinNotes: '',
            wovKnitCountryId: 0,
            wovKnitId: 0,
            wovKnitNotes: ''
        })

        const [primFiberFieldsets, setPrimFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: 0,
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: initialObject
            }
        ])

        // SECONDARY FABRIC STATE
        const [secCertChecks, setSecCertChecks] = useState(initialObject)
        const [secFabFact, setSecFabFact] = useState({
            dyeFinCountryId: 0,
            dyeFinId: 0,
            dyeFinNotes: '',
            wovKnitCountryId: 0,
            wovKnitId: 0,
            wovKnitNotes: ''
        })
        const [secFiberFieldsets, setSecFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: 0,
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: initialObject
            }
        ])

        // LINING FABRIC STATE
        const [linCertChecks, setLinCertChecks] = useState(initialObject)
        const [linFabFact, setLinFabFact] = useState({
            dyeFinCountryId: 0,
            dyeFinId: 0,
            dyeFinNotes: '',
            wovKnitCountryId: 0,
            wovKnitId: 0,
            wovKnitNotes: ''
        })
        const [linFiberFieldsets, setLinFiberFieldsets] = useState([
            {
                fiberTypeId: 0,
                percentage: 0,
                originId: 0,
                producerId: 0,
                producerNotes: '',
                certIds: initialObject
            }
        ])

    // MANUFACTURING STATE
    const [sewFact, setSewFact] = useState({countryId: 0, factoryId: 0})
    const [cutFact, setCutFact] = useState({countryId: 0, factoryId: 0})
    const [cutFactPopUp, setCutFactPopUp] = useState(false)
    const [sewFactPopUp, setSewFactPopUp] = useState(false)
    const [manCertChecks, setManCertChecks] = useState(initialObject)
    const [cmtNotes, setCmtNotes] = useState('')

    // NEW PRODUCT
    const [newProductFields, setNewProductFields] = useState({
        name: '', 
        url: '' ,
        categoryId: 0,
        featureImageUrl: '',
        currencyId: 0,
        price: '',
        washId: 0,
        dryId: 0
    })
    const [newProductId, setNewProductId] = useState(null)

    // NOTIONS
    const [notFactPopUp, setNotFactPopUp] = useState(false)
    const [notionFields, setNotionFields] = useState([])
    console.log('notionFields', notionFields)
    const [notionTypePopUp, setNotionTypePopUp] = useState(false)
    const [materialPopUp, setMaterialPopUp] = useState(false)
    const [newNotionType, setNewNotionType] = useState('')
    const [newNotionMaterial, setNewNotionMaterial] = useState('')
    const [notCertChecks, setNotCertChecks] = useState(initialObject)
    const [matProdPopUp, setMatProdPopUp] = useState(false)

    // SET INITIAL CHECKBOX STATE VALUES
        // CERTIFICATION CHECKBOX VALUES
        React.useEffect(() => {
            const initialCertChecks = certificationList.map(c => [c.name, false])
            const initialObject = Object.fromEntries(initialCertChecks)

            setInitCerts(initialObject)
        }, [certificationList])
        
        // PERMITTED CATEGORIES
        const initialPCategories = formData.permittedCategories.map(cert => [cert.id, false])
        const pCatObject = Object.fromEntries(initialPCategories)
        const [nonePCategories, setNonePCategories] = useState({101: false})
        const [pCategories, setPCategories] = useState(pCatObject)

        // PROHIBITED FIBERS STATE
        const initialPFiberChecks = formData.prohibitedFibers.map(fiber => [fiber.id, false])
        const pFibObject = Object.fromEntries(initialPFiberChecks)
        const [nonePFiber, setNonePFiber] = useState({100: false})
        const [pageTurns, setPageTurns] = useState(1)
        const [pFiberChecks, setPFiberChecks] = useState(pFibObject)

        // SIZES CHECKBOX VALUES
        const brandInfo = brandList.length >= 1 ? brandList.find(brand => brand.id === props.brandId) : null
        const sizeSystem = brandInfo ? brandInfo.size_system : 1
        
        // const sizeSystem = brandInfo.size_system
        const allSizeIds = () => {
            const sizeArray = []

            for (let i=1; i<=420; i++) {
                sizeArray.push([i, false])
            }

            const sizeObject = Object.fromEntries(sizeArray)

            return sizeObject
        }
        const [selectedSizeOptions, setSelectedSizeOptions] = useState(allSizeIds())

    // PREPARE DATA
    const certArray = certObject => {
        const checkedCerts = []

        for (const [key, value] of Object.entries(certObject)) {
            if (value) {
                checkedCerts.push(key)
            }
        }

        return checkedCerts
    }

    const formatFibers = fibFieldsets => {
        const formattedFieldsets = []

        fibFieldsets.forEach(fiber => {
            formattedFieldsets.push({
                ...fiber,
                certIds: certArray(fiber.certIds)
            })
        })

        return formattedFieldsets
    }

    const formatName = name => {
        if (name) {
            const formattedName = name.toLowerCase().split(" ")
            console.log('formattedName', formattedName)
            for (let i = 0; i < formattedName.length; i++) {
                formattedName[i] = formattedName[i][0].toUpperCase() + formattedName[i].substr(1)
            }

            console.log('formattedName', formattedName)
            return formattedName.join(" ")
        }
    }

    const formatUrl = url => {
        if (url) {
            return url.toLowerCase()
        }
    }

    // SUBMIT FORM
    const submitProduct = () => {
        // PREPARE DATA - COLORS
        const colorArray = []
        colorFieldsets.forEach(color => {
            colorArray.push({
                name: formatName(color.name),
                descriptionId: color.descriptionId,
                swatchUrl: formatUrl(color.swatchUrl),
                imageUrls: color.imageUrls.forEach(url => formatUrl(url))
            })
        })

        // PREPARE DATA - FABRICS
        const fabricArray = []
        if (primCheck) {
            fabricArray.push({
                certs: certArray(primCertChecks),
                fabric_details: primFabFact,
                fiber_array: formatFibers(primFiberFieldsets),
                relationship: "primary"
            })
        }

        if (secCheck) {
            fabricArray.push({
                certs: certArray(secCertChecks),
                fabric_details: secFabFact,
                fiber_array: formatFibers(secFiberFieldsets),
                relationship: "secondary"
            })
        }

        if (linCheck) {
            fabricArray.push({
                certs: certArray(linCertChecks),
                fabric_details: linFabFact,
                fiber_array: formatFibers(linFiberFieldsets),
                relationship: "lining"
            })
        }

        // PREPARE DATA - MANUFACTURING
        const manCertArray = []
        for (const [key, value] of Object.entries(manCertChecks)) {
            if (value) {
                manCertArray.push(key)
            }
        }

        // PREPARE DATA - NOTIONS
        const notionArray = []
        if (notionFields.length > 0) {
            notionFields.forEach(notion => {
                notionArray.push({
                    ...notion,
                    certIds: certArray(notion.certIds)
                })
            })
        }

        // PREPARE DATA - SIZES
        const sizeArray = []
        for (const [key, value] of Object.entries(selectedSizeOptions)) {
            if (value) {
                sizeArray.push(key)
            }
        }

        const formattedName = formatName(newProductFields.name)
        console.log('formattedName', formattedName)

    const data = {
        "english_name": formattedName,
        "brand_id": props.brandId,
        "category_id": newProductFields.categoryId,
        "product_url": formatUrl(newProductFields.website),
        "feature_image_url": formatUrl(newProductFields.featureImageUrl),
        "multiple_color_options": colorFieldsets.length > 1 ? true : false,
        "cost_in_home_currency": newProductFields.price,
        "wash_id": Number(newProductFields.washId),
        "dry_id": Number(newProductFields.dryId),
        "cmt_notes": cmtNotes,
        "color_fieldsets": colorFieldsets,
        "sew_fact": sewFact,
        "cut_fact": cutFact,
        "man_cert_checks": certArray(manCertChecks),
        "fabrics": fabricArray,
        "notions": notionArray,
        "selected_sizes": sizeArray,
        "approved_by_admin": false
    }

    console.log('data', data)

    // CHECK ALL REQUIRED FIELDS ARE INCLUDED
        const isObject = variable => (
            Object.prototype.toString.call(variable) === '[object Object]'
        )
        
        for (const [key, value] of Object.entries(data)) {
            if (value === undefined || 0) {
                throw new Error(`'${key}' is a required field.  Please enter a value and submit the form again.`)
            }

            if (isObject(value)) {
                for (const [subKey, subValue] of Object.entries(value)) {
                    if (subValue === undefined || 0) {
                        throw new Error(`'${key}: ${subKey}' is a required field.  Please enter a value and submit the form again.`)
                    }
                }
            }
        }

    // POST THE DATA
        const postRequestParams = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        fetch(`${config.API_URL}/api/products/product-form`,
            postRequestParams
        )
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Server responded with an error!')
                }
                return response.json()
            })
}

// FORM PAGES
    // BRAND
    const brand = (
        <NPFBrand
            brandList={brandList}
            brandPopUp={brandPopUp}
            currencies={makeCurrencyOptions}
            currentBrandId={props.brandId}
            currentPage={currentPage}
            formatName={formatName}
            formatUrl={formatUrl}
            newBrandFields={newBrandFields}
            newProductFields={newProductFields}
            pageTurns={pageTurns}
            setBrandList={setBrandList}
            setBrandPopUp={setBrandPopUp}
            setCurrentBrandId={props.setBrandId}
            setNewBrandFields={setNewBrandFields}
            setNewProductFields={setNewProductFields}
            setPage={setPage}
        />
    )
    
    // COLORS
    const colors = (
        <NPFColors
            colorFieldsets={colorFieldsets}
            currentPage={currentPage}
            formatName={formatName}
            formatUrl={formatUrl}
            setColorFieldsets={setColorFieldsets}
            setPage={setPage}
        />
    )

    const fabricProps = {
        certificationList: certificationList,
        certPopUp: certPopUp,
        countries: countries,
        currentPage: currentPage,
        dyeFactPopUp: dyeFactPopUp,
        initCerts: initCerts,
        factoryList: factoryList,
        fiberPopUp: fiberPopUp,
        fiberTypeList: fiberTypeList,
        formatName: formatName,
        formatUrl: formatUrl,
        millPopUp: millPopUp,
        newCert: newCert,
        newFact: newFact,
        newFiber: newFiber,
        newMill: newMill,
        newProducer: newProducer,
        producerPopUp: producerPopUp,
        setCertificationList: setCertificationList,
        setDyeFactPopUp: setDyeFactPopUp,
        setFiberTypeList: setFiberTypeList,
        setFactoryList: setFactoryList,
        setCertPopUp: setCertPopUp,
        setFiberPopUp: setFiberPopUp,
        setInitCerts: setInitCerts,
        setMillPopUp: setMillPopUp,
        setNewCert: setNewCert,
        setNewFact: setNewFact,
        setNewFiber: setNewFiber,
        setNewMill: setNewMill,
        setNewProducer: setNewProducer,
        setPage: setPage,
        setProducerPopUp: setProducerPopUp,
        setSewFactPopUp: setSewFactPopUp,
        sewFactPopUp: sewFactPopUp
    }
        
    // PRIMARY FABRIC PAGE
    const primFabric = (
        <NPFFabrics
            certChecks={primCertChecks}
            fabFact={primFabFact}
            fabricProps={fabricProps}
            fiberFieldsets={primFiberFieldsets}
            formatName={formatName}
            formatUrl={formatUrl}
            id='prim'
            setFabFact={setPrimFabFact}
            setFiberFieldsets={setPrimFiberFieldsets}
            setCertChecks={setPrimCertChecks}
            title='Primary Fabric'
            pageTurns={primPageTurns}
        />
    )

    // SECONDARY FABRIC PAGE
    const secFabric = (
        <NPFFabrics
            certChecks={secCertChecks}
            fabFact={secFabFact}
            fabricProps={fabricProps}
            fiberFieldsets={secFiberFieldsets}
            id='sec'
            setFabFact={setSecFabFact}
            setFiberFieldsets={setSecFiberFieldsets}
            setCertChecks={setSecCertChecks}
            title='Secondary Fabric'
            pageTurns={secPageTurns}
        />
    )

    // LINING FABRIC PAGE
    const linFabric = (
        <NPFFabrics
            certChecks={linCertChecks}
            fabFact={linFabFact}
            fabricProps={fabricProps}
            fiberFieldsets={linFiberFieldsets}
            id='lin'
            setFabFact={setLinFabFact}
            setFiberFieldsets={setLinFiberFieldsets}
            setCertChecks={setLinCertChecks}
            title='Lining Fabric'
            pageTurns={linPageTurns}
        />
    )

    // FABRICS QUESTION PAGE
    const fabricsQuestion = (
        <NPFFabricsQuestion 
            currentPage={currentPage}
            linCheck={linCheck}
            primCheck={primCheck}
            setBackPageTurns={setBackPageTurns}
            secCheck={secCheck}
            setLinCheck={setLinCheck}
            setPage={setPage}
            setPrimCheck={setPrimCheck}
            setPrimPageTurns={setPrimPageTurns}
            setSecCheck={setSecCheck}
            setSecPageTurns={setSecPageTurns}
        />
    )

    // FINISH
    const finish = (
        <div>
            <FormPage>
                <p className='NewProductForm__big-text'>
                    That's it!
                </p>
                <Link className='NewProductForm__button-like' to='/'>HOME</Link>
            </FormPage>

            <NPFFooter 
                buttons='prev'
                nextButton={() => setPage(currentPage + 1)}
                previousButton={() => setPage(currentPage - 1)}
            />
        </div>
    )

    // IMAGES
    const images = (
        <NPFImages 
            brandId={props.brandId}
            colorFieldsets={colorFieldsets}
            currentPage={currentPage}
            formatName={formatName}
            formatUrl={formatUrl}
            newProductFields={newProductFields}
            newProductId={newProductId}
            setColorFieldsets={setColorFieldsets}
            setNewProductId={setNewProductId}
            setPage={setPage}
        />
    )

    // MANUFACTURING
    const manufacturing = (
        <NPFManufacturing
            brandId={props.brandId}
            certChecks={manCertChecks}
            cmtNotes={cmtNotes}
            currentPage={currentPage} 
            cutFact={cutFact}
            cutFactPopUp={cutFactPopUp}
            fabricProps={fabricProps}
            setCutFact={setCutFact}
            setCutFactPopUp={setCutFactPopUp}
            sewFact={sewFact}
            sewFactPopUp={sewFactPopUp}
            setCertChecks={setManCertChecks}
            setCmtNotes={setCmtNotes}
            setPage={setPage}
            setSewFact={setSewFact}
            setSewFactPopUp={setSewFactPopUp}
        />
    )

    // NEW PRODUCTS
    const newProduct = (
        <NPFNewProduct
            brandId={props.brandId}
            brandList={brandList}
            currentPage={currentPage}
            formatName={formatName}
            formatUrl={formatUrl}
            newProductFields={newProductFields}
            setBrandList={setBrandList}
            setNewProductFields={setNewProductFields}
            setPage={setPage}
        />
    )

    // NOT PERMITTED
    const notPermitted = (
        <div>
            <FormPage>
                <p className='NewProductForm__big-text'>
                    Veronaut does accept products made with synthetic fabrics, with exceptions for outerwear, shoes, and swimwear
                </p>

                <Link 
                    className='NewProductForm__button-like'
                    to='/about'>
                        FIND OUT WHY
                </Link>

                <FormButton 
                    buttonText='SUBMIT A DIFFERENT PRODUCT'
                    handleClick={() => setPage(0)}
                />
            </FormPage>

            <NPFFooter
                buttons='prev'
                previousButton={() => setPage(currentPage - 1)}
            />
        </div>
    )

    // NOTIONS
    const notions = (
        <NPFNotions
            backPageTurns={backPageTurns}
            fabricProps={fabricProps}
            fiberTypeList={fiberTypeList}
            materialPopUp={materialPopUp}
            matProdPopUp={matProdPopUp}
            newNotionMaterial={newNotionMaterial}
            newNotionType={newNotionType}
            notCertChecks={notCertChecks}
            notFactPopUp={notFactPopUp}
            notionFields={notionFields}
            notionTypeList={notionTypeList}
            notionTypePopUp={notionTypePopUp}
            setFiberTypeList={setFiberTypeList}
            setNewNotionMaterial={setNewNotionMaterial}
            setNewNotionType={setNewNotionType}
            setNotCertChecks={setNotCertChecks}
            setNotFactPopUp={setNotFactPopUp}
            setNotionTypePopUp={setNotionTypePopUp}
            setMaterialPopUp={setMaterialPopUp}
            setMatProdPopUp={setMatProdPopUp}
            setNotionFields={setNotionFields}
            setNotionTypeList={setNotionTypeList}
        />
    )

    // PERMITTED CATEGORIES
    const pCatChange = event => {
        if (pCategories[event.target.id] === false) {
            setPCategories(
                {
                    ...pCategories,
                    [event.target.id]: true
                }
            )
            setNonePCategories({101: false})
            setPageTurns(2)
        } else {
            setPCategories(
                {
                    ...pCategories, 
                    [event.target.id]: false
                }
            )
        }
    }

    const nonePCatChange = () => {
        if (nonePCategories[101] === false) {
            setPCategories(pCatObject)
            setNonePCategories({101: true})
            setPageTurns(1)
        } else {
            setNonePCategories({101: false})
        }
    }

    const permittedCategories = (
        <NPFPermittedCategories
            currentPage={currentPage}
            none={nonePCategories}
            noneChange={nonePCatChange}
            pageTurns={pageTurns}
            pCatChange={event => pCatChange(event)}
            pCategories={pCategories}
            setPage={setPage}
            setPageTurns={setPageTurns}
        />
    )

    // PROHIBITED FIBERS
    const pFiberChange = event => {
        if (pFiberChecks[event.target.id] === false) {
            setPFiberChecks(
                {
                    ...pFiberChecks, 
                    [event.target.id]: true
                }
            )
    
            setNonePFiber({100: false})
            setPageTurns(1)
        } else {
            setPFiberChecks(
                {
                    ...pFiberChecks,
                    [event.target.id]: false
                }
            )
        }
    }

    const nonePFiberChange = () => {
        if (nonePFiber[100] === false) {
            setPFiberChecks(pFibObject)
            setNonePFiber({100: true})
            setPageTurns(3)
        } else {
            setNonePFiber({100: false})
        }
    }

    const prohibitedFibers = (
        <NPFProhibFibers
            currentPage={currentPage}
            setPage={setPage}
            none={nonePFiber}
            noneChange={nonePFiberChange}
            pFiberChecks={pFiberChecks}
            pFiberChange={event => pFiberChange(event)}
            pageTurns={pageTurns}
            setPageTurns={setPageTurns}
        />
    )

    // SIZES
    const sizes = (
        <NPFSizes
            brandId={props.brandId}
            brandList={brandList}
            category={newProductFields.category}
            currentPage={currentPage}
            newProductId={newProductId}
            selectedSizeOptions={selectedSizeOptions}
            setPage={setPage}
            setSelectedSizeOptions={setSelectedSizeOptions}
            sizeSystem={sizeSystem}
        />
    )

    const start = (
        <div>
            <FormPage title='Add a Product'>
                <FormButton buttonText='START' handleClick={() => setPage(currentPage + 1)}/>
            </FormPage>
        </div>
    )

    const submit = (
        <NPFSubmit
            currentPage={currentPage}
            selectedSizeOptions={selectedSizeOptions}
            setPage={setPage}
            submitProduct={submitProduct}
        />
    )

    const formPages = [
        notions,
        primFabric,

        start,
        prohibitedFibers,
        permittedCategories,
        notPermitted,
        brand,
        newProduct,
        manufacturing,
        colors,
        images,
        sizes,
        fabricsQuestion,
        primFabric,
        secFabric,
        linFabric,
        notions,
        submit,
        finish
    ]

    if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else if (Object.keys(manCertChecks) < 1) {
        return <div> Loading... </div>
    } else {
        return (
            <div className='NewProductForm'>
                {formPages[currentPage]}
            </div>
        )
    }
}

NewProductForm.defaultProps = {
    brandId: 0,
    certificationList: [],
    setBrandId: () => {},
    setCertificationList: () => {}
}

export default NewProductForm