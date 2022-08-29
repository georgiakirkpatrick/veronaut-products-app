import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import config from './config'
import '@fortawesome/react-fontawesome'
import './FontAwesomeIcons/FontAwesomeIcons'
import Account from './Account/Account'
import AllCategories from './AllCategories/AllCategories'
import Footer from './Footer/Footer'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import NewProductForm from './NewProductForm/NewProductForm'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import NewAccount from './NewAccount/NewAccount'
import ProductDetail from './ProductDetail/ProductDetail'
import ProductListPage from './ProductListPage/ProductListPage'
import PrincipleList from './PrincipleList/PrincipleList'
import RequireAuth from './RequireAuth/RequireAuth'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import './App.css'

const App = () => {
    const [brandArray, setBrandArray] = useState([])
    const [brandId, setBrandId] = useState(0)
    const [categoryArray, setCategoryArray] = useState([])
    const [categoriesLoaded, setCategoriesLoaded] = useState(false)
    const [catError, setCatError] = useState(null)
    const [certificationArray, setCertificationArray] = useState([])
    const [factoryArray, setFactoryArray] = useState([])
    const [productArray, setProductArray] = useState([])

    useEffect(() => {
        const getRequestParams = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
        }
        
        const getAllCategories = () => {
            fetch(`${config.API_URL}/api/categories`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 400) {
                console.log('There was a problem.  Status code: ' + response.status)
                throw new Error("Server responded with an error!")
                }
                return response.json()
            })
            .then(categoryArray => {
                console.log('categoryArray', categoryArray)
                const categories = categoryArray.map(category => ({
                    id: category.id,
                    text: category.english_name,
                    value: category.id,
                    class: category.category_class,
                    featureImage: category.feature_image
                }))

                categories.sort((a, b) => 
                    a.text > b.text ? 1 : -1
                )

                console.log('categories', categories)

                setCategoryArray(categories)
                setCategoriesLoaded(true)
            },
            err => {
                setCatError(err)
                setCategoriesLoaded(false)
            })
        }
        getAllCategories()

        const getBrands = () => {
            fetch(`${config.API_URL}/api/brands`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("Server responded with an error!")
                    }
                    return response.json()
                    })
                .then(brandArray => {
                    const brands = brandArray.map(brand => ({
                        id: brand.id,
                        text: brand.english_name,
                        value: brand.id,
                        website: brand.website,
                        currencyId: brand.home_currency,
                        sizeSystemId: brand.size_system,
                        approved: brand.approved_by_admin,
                        published: brand.date_published
                    }))

                    brands.sort((a, b) => a.text > b.text ? 1 : -1)
                    setBrandArray(brands)
                })
        }
        getBrands()

        const getCertifications = () => {
            fetch(`${config.API_URL}/api/certifications`, getRequestParams)
                .then(response => {
                    if (response.status >= 400) {
                        console.log('There was a problem.  Status code: ' + response.status)
                        throw new Error("Server responded with an error!")
                    }
                    return response.json()
                })
                .then(certificationArray => {
                    const formattedCerts = certificationArray.map(cert => {
                        return {
                            id: cert.id,
                            name: cert.id,
                            value: cert.id,
                            text: cert.english_name,
                            website: cert.website,
                            approved: cert.approved_by_admin,
                            published: cert.date_published
                        }
                    })

                    formattedCerts.sort((a, b) => a.text > b.text ? 1 : -1)
                    setCertificationArray(formattedCerts)
                })
        }
        getCertifications()
                
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
                    const formattedFactories = factoryArray.map(factory => {
                        return {
                            id: factory.id,
                            text: factory.english_name,
                            country: factory.country,
                            website: factory.website,
                            notes: factory.notes,
                            approved: factory.approved_by_admin,
                            published: factory.published
                        }
                    })

                    formattedFactories.sort((a, b) => a.text > b.text ? 1 : -1)
                    setFactoryArray(formattedFactories)
                })
        }
        getFactories()
    }, [])

    const fullPrinciples = (
        [
        {
            id: 1,
            title: 'Good design', 
            description: 'Clothing and accessories should be flattering, versatile, functional, and built to last.'
        },
        {
            id: 2,
            title: 'Transparent',
            description: 'Product listings should include information about who, where, and how products are manufactured throughout the supply chain.'
        },
        {
            id: 3,
            title: 'Ethical',
            description: 'Clothing and accessories should be made in workplaces that prioritize employee safety, living wages, and freedom of association (the right to join a union).'
        },
        {
            id: 4,
            title: 'Sustainable',
            description: 'Fashion products should be made with renewable, non-polluting resources whenever possible.  Production should minimize waste.'
        }
        ]
    )

    const principles = [
        {
            id: 1,
            title: 'Good design', 
            description: 'Clothing and accessories should be flattering, versatile, functional, and built to last.'
        },
        {
            id: 2,
            title: 'Transparent',
            description: 'Product listings should include information about who, where, and how products are manufactured throughout the supply chain.'
        },
        {
            id: 3,
            title: 'Ethical',
            description: 'Clothing and accessories should be made in workplaces that prioritize employee safety, living wages, and freedom of association (the right to join a union).'
        },
        {
            id: 4,
            title: 'Sustainable',
            description: 'Fashion products should be made with renewable, non-polluting resources whenever possible.  Production should minimize waste.'
        }
    ]

    if (catError) {
        return <div> {catError.message} </div>
    } else if (!categoriesLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <Router>
                <div className='App'>
                    <main>
                        <ScrollToTop />

                        <Switch>
                            <Route path='/about' component={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <PrincipleList
                                        principles={principles}
                                        routeProps={routeProps}
                                    />
                                    <Footer />
                                </>
                            )} />

                            <RequireAuth path='/account'>
                                <Header categoryArray={categoryArray} background='light' />
                                <Account />
                                <Footer />
                            </RequireAuth>

                            <RequireAuth path='/add-product'>
                                <Header categoryArray={categoryArray} background='light' />
                                <NewProductForm
                                    brandArray={brandArray}
                                    brandId={brandId}
                                    certificationArray={certificationArray}
                                    factoryArray={factoryArray}
                                    setBrandArray={setBrandArray}
                                    setBrandId={setBrandId}
                                    setCertificationArray={setCertificationArray}
                                    setfactoryArray={setFactoryArray}
                                />
                            </RequireAuth>

                            {/* <Route path='/add-product' exact render={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <NewProductForm
                                        brandArray={brandArray}
                                        brandId={brandId}
                                        certificationArray={certificationArray}
                                        factoryArray={factoryArray}
                                        setBrandArray={setBrandArray}
                                        setBrandId={setBrandId}
                                        setCertificationArray={setCertificationArray}
                                        setFactoryArray={setFactoryArray}
                                    />
                                </>
                            )}/> */}

                            <Route path='/all-categories' render={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <AllCategories
                                        categoryArray={categoryArray}
                                        routeProps={routeProps}
                                    />
                                    <Footer />
                                </>
                            )}/>

                            <Route path='/category/:categoryId/:slug' render={routeProps => (
                            <>
                                <Header categoryArray={categoryArray} background='light' />

                                <ProductListPage
                                    categoryArray={categoryArray}
                                    productArray={productArray}
                                    routeProps={routeProps}
                                    setProductArray={setProductArray}
                                />

                                <Footer />
                            </>
                            )} />

                            <Route path='/create-account' render={routeProps => (
                            <>
                                <Header categoryArray={categoryArray} background='light' />
                                <NewAccount
                                routeProps={routeProps}
                                />
                            </>
                            )} />

                            <Route path='/forgot-password' render={routeProps => (
                                <ForgotPassword
                                    routeProps={routeProps}
                                />
                            )} />

                            <Route path='/login' render={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <Login
                                        routeProps={routeProps}
                                    />
                                </>
                            )} />

                            <Route path='/principles' render={(routeProps) => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <PrincipleList
                                        routeProps={routeProps}
                                        principles={fullPrinciples}
                                    />
                                    <Footer />
                                </>
                            )}/>

                            <Route path='/product/:productId/:slug' render={(routeProps) => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <ProductDetail
                                        factoryArray={factoryArray}
                                        certArray={certificationArray}
                                        productArray={productArray}
                                        routeProps={routeProps}
                                        setProductArray={setProductArray}
                                    />
                                    <Footer />
                                </>
                            )}/>

                            <Route path='/' exact render={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='dark' />
                                    <LandingPage
                                        categoryArray={categoryArray}
                                        routeProps={routeProps}
                                    />
                                    <Footer />
                                </>
                            )}/>

                            <Route render={routeProps => (
                                <>
                                    <Header categoryArray={categoryArray} background='light' />
                                    <NotFoundPage
                                        routeProps={routeProps}
                                    />
                                    <Footer />
                                </>
                            )}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        )    
    }
}

App.defaultProps = {
  data: []
}

export default App