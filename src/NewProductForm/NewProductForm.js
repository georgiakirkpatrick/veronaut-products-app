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
    const initialCertChecks = certificationList.map(c => [c.id, false])
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
    const [notionTypePopUp, setNotionTypePopUp] = useState(false)
    const [materialPopUp, setMaterialPopUp] = useState(false)
    const [newNotionType, setNewNotionType] = useState('')
    const [newNotionMaterial, setNewNotionMaterial] = useState('')
    const [notCertChecks, setNotCertChecks] = useState(initialObject)
    const [matProdPopUp, setMatProdPopUp] = useState(false)

    // SET INITIAL CHECKBOX STATE VALUES
        // CERTIFICATION CHECKBOX VALUES
        React.useEffect(() => {
            const initialCertChecks = certificationList.map(c => [c.id, false])
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

    // SUBMIT FORM
    const submitProduct = () => {

    // PREPARE DATA
    const fabricArray = []
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

        fibFieldsets.forEach(fibFieldset => {
            const formattedCerts = certArray(fibFieldset.certIds)

            formattedFieldsets.push({
                ...fibFieldset,
                certIds: formattedCerts
            })


        })

        return formattedFieldsets
    }

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

    const manCertArray = []

    for (const [key, value] of Object.entries(manCertChecks)) {
        if (value) {
            manCertArray.push(key)
        }
    }

    const sizeArray = []

    for (const [key, value] of Object.entries(selectedSizeOptions)) {
        if (value) {
            sizeArray.push(key)
        }
    }

    const newNotionArray = []

    if (notionFields.length > 0) {
        notionFields.forEach(notion => {
            const checkedCerts = []

            for (const [key, value] of Object.entries(notion.certIds)) {
                if (value) {
                    checkedCerts.push(key)
                }
            }

            newNotionArray.push({
                ...notion,
                certIds: checkedCerts
            })
        })
    }

    const data = {
        "english_name": newProductFields.name,
        "brand_id": props.brandId,
        "category_id": newProductFields.categoryId,
        "product_url": newProductFields.url,
        "feature_image_url": newProductFields.featureImageUrl,
        "multiple_color_options": colorFieldsets.length > 1 ? true : false,
        "cost_in_home_currency": newProductFields.price,
        "wash_id": Number(newProductFields.washId),
        "dry_id": Number(newProductFields.dryId),
        "cmt_notes": cmtNotes,
        "color_fieldsets": colorFieldsets,
        "sew_fact": sewFact,
        "cut_fact": cutFact,
        "man_cert_checks": manCertArray,
        "fabrics": fabricArray,
        "notions": newNotionArray,
        "selected_sizes": sizeArray,
        "approved_by_admin": false
    }

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
            currentPage={currentPage}
            setPage={setPage}
            currentBrandId={props.brandId}
            setCurrentBrandId={props.setBrandId}
            newBrandFields={newBrandFields}
            setNewBrandFields={setNewBrandFields}
            newProductFields={newProductFields}
            setNewProductFields={setNewProductFields}
            brandList={brandList}
            setBrandList={setBrandList}
            brandPopUp={brandPopUp}
            setBrandPopUp={setBrandPopUp}
            setBrandId={props.setBrandId}
            currencies={makeCurrencyOptions}
            pageTurns={pageTurns}
        />
    )
    
    // COLORS
    const colors = (
        <NPFColors
            currentPage={currentPage}
            setPage={setPage}
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
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
            fabricProps={fabricProps}
            id='prim'
            title='Primary Fabric'
            fabFact={primFabFact}
            setFabFact={setPrimFabFact}
            fiberFieldsets={primFiberFieldsets}
            setFiberFieldsets={setPrimFiberFieldsets}
            certChecks={primCertChecks}
            setCertChecks={setPrimCertChecks}
            pageTurns={primPageTurns}
        />
    )

    // SECONDARY FABRIC PAGE
    const secFabric = (
        <NPFFabrics
            fabricProps={fabricProps}
            id='sec'
            title='Secondary Fabric'
            fabFact={secFabFact}
            setFabFact={setSecFabFact}
            fiberFieldsets={secFiberFieldsets}
            setFiberFieldsets={setSecFiberFieldsets}
            certChecks={secCertChecks}
            setCertChecks={setSecCertChecks}
            pageTurns={secPageTurns}
        />
    )

    // LINING FABRIC PAGE
    const linFabric = (
        <NPFFabrics
            fabricProps={fabricProps}
            id='lin'
            title='Lining Fabric'
            fabFact={linFabFact}
            setFabFact={setLinFabFact}
            fiberFieldsets={linFiberFieldsets}
            setFiberFieldsets={setLinFiberFieldsets}
            certChecks={linCertChecks}
            setCertChecks={setLinCertChecks}
            pageTurns={linPageTurns}
        />
    )

    // FABRICS QUESTION PAGE
    const fabricsQuestion = (
        <NPFFabricsQuestion 
            currentPage={currentPage}
            setPage={setPage}
            primCheck={primCheck}
            setPrimCheck={setPrimCheck}
            secCheck={secCheck}
            setSecCheck={setSecCheck}
            linCheck={linCheck}
            setLinCheck={setLinCheck}
            setPrimPageTurns={setPrimPageTurns}
            setSecPageTurns={setSecPageTurns}
            setBackPageTurns={setBackPageTurns}
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
                previousButton={() => setPage(currentPage - 1)}
                nextButton={() => setPage(currentPage + 1)}
            />
        </div>
    )

    // IMAGES
    const images = (
        <NPFImages 
            currentPage={currentPage}
            setPage={setPage}
            brandId={props.brandId}
            newProductFields={newProductFields}
            newProductId={newProductId}
            setNewProductId={setNewProductId}
            colorFieldsets={colorFieldsets}
            setColorFieldsets={setColorFieldsets}
        />
    )

    // MANUFACTURING
    const manufacturing = (
        <NPFManufacturing
            currentPage={currentPage} 
            setPage={setPage} 
            brandId={props.brandId}
            cutFact={cutFact}
            setCutFact={setCutFact}
            cutFactPopUp={cutFactPopUp}
            setCutFactPopUp={setCutFactPopUp}
            sewFact={sewFact}
            setSewFact={setSewFact}
            sewFactPopUp={sewFactPopUp}
            setSewFactPopUp={setSewFactPopUp}
            cmtNotes={cmtNotes}
            setCmtNotes={setCmtNotes}
            certChecks={manCertChecks}
            setCertChecks={setManCertChecks}
            fabricProps={fabricProps}
        />
    )

    // NEW PRODUCTS
    const newProduct = (
        <NPFNewProduct
            currentPage={currentPage}
            setPage={setPage}
            brandId={props.brandId}
            brandList={brandList}
            setBrandList={setBrandList}
            newProductFields={newProductFields}
            setNewProductFields={setNewProductFields}
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
            fabricProps={fabricProps}
            materialPopUp={materialPopUp}
            setMaterialPopUp={setMaterialPopUp}
            fiberTypeList={fiberTypeList}
            setFiberTypeList={setFiberTypeList}
            newNotionMaterial={newNotionMaterial}
            setNewNotionMaterial={setNewNotionMaterial}
            newNotionType={newNotionType}
            setNewNotionType={setNewNotionType}
            notCertChecks={notCertChecks}
            setNotCertChecks={setNotCertChecks}
            notFactPopUp={notFactPopUp}
            setNotFactPopUp={setNotFactPopUp}
            notionFields={notionFields}
            setNotionFields={setNotionFields}
            notionTypeList={notionTypeList}
            setNotionTypeList={setNotionTypeList}
            notionTypePopUp={notionTypePopUp}
            setNotionTypePopUp={setNotionTypePopUp}
            matProdPopUp={matProdPopUp}
            setMatProdPopUp={setMatProdPopUp}
            backPageTurns={backPageTurns}
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
            setPage={setPage}
            none={nonePCategories}
            noneChange={nonePCatChange}
            pCategories={pCategories}
            pCatChange={event => pCatChange(event)}
            pageTurns={pageTurns}
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
            currentPage={currentPage}
            setPage={setPage}
            brandId={props.brandId}
            brandList={brandList}
            category={newProductFields.category}
            newProductId={newProductId}
            sizeSystem={sizeSystem}
            selectedSizeOptions={selectedSizeOptions}
            setSelectedSizeOptions={setSelectedSizeOptions}
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
            setPage={setPage}
            selectedSizeOptions={selectedSizeOptions}
            submitProduct={submitProduct}
        />
    )

    const formPages = [
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