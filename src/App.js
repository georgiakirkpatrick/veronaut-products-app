import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import config from './config'
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
import data from './DATA'
import './App.css'

// Make fortawesome icons available
library.add(fab)

const App = () => {
  const [brandArray, setBrandArray] = useState([])
  const [brandId, setBrandId] = useState(0)
  const [brandError, setBrandError] = useState(null)
  const [categoryArray, setCategoryArray] = useState([])
  const [catsLoaded, setCatsLoaded] = useState(false)
  const [catsError, setCatsError] = useState(null)
  const [certificationArray, setCertificationArray] = useState([])
  const [certError, setCertError] = useState(null)
  const [factoryArray, setFactoryArray] = useState([])
  const [factError, setFactError] = useState(null)
  const [productArray, setProductArray] = useState([])
  const [prodError, setProdError] = useState(null)

  // The useEffect React Hook synchronizes the App component with veronaut-products-api.
  useEffect(() => {
    const getRequestParams = {
      method: 'GET',
      headers: {
          'Content-type': 'application/json'
      }
    }
    
    // getAllCategories fetches clothing category data from the veronaut-products-api.
    const getCategories = () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/category`, getRequestParams)
      .then(response => {
        if (response.ok) {
          setCatsError(null)
          return response.json()
        } else {
          // If an API error occurs, use data.placeholder.categories data and create an API error message.
          setCatsError('There was a problem fetching the categories.  Status code: ' + response.status)

          return data.placeholder.categories
        }
      }
      ,
      err => {
        // If the frontend is unable to connect to the API, use data.placeholder.categories data and reveal the category error message.
        setCatsError("There was a problem communicating with the server.  Error message: " + err)
        return data.placeholder.categories
      })
      .then(responseJson => {
        const formattedCats = responseJson.map(category => ({
          id: category.id,
          text: category.english_name,
          value: category.id,
          class: category.category_class,
          featureImage: category.feature_image
        }))

        formattedCats.sort((a, b) => 
          a.text > b.text ? 1 : -1
        )

        setCategoryArray(formattedCats)
        setCatsLoaded(true)
      })
    }

    // getBrands fetches clothing brand data from the veronaut-products-api.
    const getBrands = () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/brands`, getRequestParams)
      .then(response => {
        if (response.ok) {
          setBrandError(null)
          return response.json()
        } else {
          // If an API error occurs, use data.placeholder.brands data and create an API error message.
          setBrandError('There was a problem fetching the brands.  Status code: ' + response.status)

          return data.placeholder.brands
        }
      },
      err => {
        // If the frontend is unable to connect to the API, use data.placeholder.categories data and create a category error message.
        setBrandError("There was a problem communicating with the server.  Error message: " + err)
        return data.placeholder.categories
      })
      .then(responseJson => {
        const formattedBrands = responseJson.map(brand => ({
          id: brand.id,
          text: brand.english_name,
          value: brand.id,
          website: brand.website,
          currencyId: brand.home_currency,
          sizeSystemId: brand.size_system,
          approved: brand.approved_by_admin,
          createdAt: brand.created_at
        }))

        formattedBrands.sort((a, b) => a.text > b.text ? 1 : -1)
        setBrandArray(formattedBrands)
      })
    }

    // getCertifications fetches certification data from the veronaut-products-api.
    const getCertifications = () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/certifications`, getRequestParams)
      .then(response => {
        if (response.ok) {
          setCertError(null)
          return response.json()
        } else {
          // If an API error occurs, use data.placeholder.certifications data and create an API error message.
          setCertError('There was a problem fetching the certifications.  Status code: ' + response.status)

          return data.placeholder.certifications
        }
      })
      .then(certificationArray => {
        const formattedCerts = certificationArray.map(cert => ({
          id: cert.id,
          name: cert.id,
          value: cert.id,
          text: cert.english_name,
          website: cert.website,
          approved: cert.approved_by_admin,
          createdAt: cert.created_at
        }))

        formattedCerts.sort((a, b) => a.text > b.text ? 1 : -1)
        setCertificationArray(formattedCerts)

        return formattedCerts
      }
      ,
      err => {
        console.log('err', err)
      })
    }
    
    // getFactories fetches clothing brand data from veronaut-products-api.
    const getFactories = () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/factories`, getRequestParams)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          // If an API error occurs, use data.placeholder.factories data data and reveal the API error message.
          console.log('There was a problem fetching the factories.  Status code: ' + response.status)

          return data.placeholder.factories
        }
      })
      .then(factoryArray => {
        console.log('factoryArray', factoryArray)

        const formattedFactories = factoryArray.map(factory => ({
          id: factory.id,
          text: factory.english_name,
          country: factory.country,
          website: factory.website,
          notes: factory.notes,
          approved: factory.approved_by_admin,
          createdAt: factory.created_at
        }))

        formattedFactories.sort((a, b) => a.text > b.text ? 1 : -1)
        setFactoryArray(formattedFactories)

        console.log('formattedFactories', formattedFactories)
      }
      ,
      err => {
        console.log('err', err)
      })
    }

    getCategories()
    // getBrands()
    // getCertifications()
    // getFactories()

  }, [])

 if (!catsLoaded) {
      return <div> Loading... </div>
  } else {
    return (
      <Router>
        <div className='App'>
          <main>
            <ScrollToTop />

            <Switch>
              <Route path='/about' 
                component={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <PrincipleList 
                      principles={data.verbage.principles} 
                      routeProps={routeProps}
                    />
                    <Footer />
                  </>
                )} 
              />

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

              <Route path='/all-categories' 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <AllCategories
                        categoryArray={categoryArray}
                        routeProps={routeProps}
                    />
                    <Footer />
                  </>
                )} 
              />

              <Route path='/category/:categoryId/:slug' 
                render={routeProps => (
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
                )} 
              />

              <Route path='/create-account' 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <NewAccount routeProps={routeProps} />
                  </>
                )} 
              />

              <Route path='/forgot-password' 
                render={routeProps => (
                  <ForgotPassword routeProps={routeProps} />
                )} 
              />

              <Route path='/login' 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <Login routeProps={routeProps} />
                  </>
                )} 
              />

              <Route path='/principles' 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <PrincipleList 
                      routeProps={routeProps} 
                      principles={data.verbage.principles}
                    />
                    <Footer />
                  </>
                )} 
              />

              <Route path='/product/:productId/:slug' 
                render={routeProps => (
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
                )} 
              />

              <Route path='/' exact 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='dark' />
                    <LandingPage
                        categoryArray={categoryArray}
                        principles={data.verbage.principles}
                        routeProps={routeProps}
                    />
                    <Footer />
                  </>
                )} 
              />

              <Route 
                render={routeProps => (
                  <>
                    <Header categoryArray={categoryArray} background='light' />
                    <NotFoundPage routeProps={routeProps} />
                    <Footer />
                  </>
                )}
              />
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