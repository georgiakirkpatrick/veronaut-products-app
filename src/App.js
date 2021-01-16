import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fortawesome/react-fontawesome'
import './FontAwesomeIcons/FontAwesomeIcons'
import Account from './Account/Account'
import AllCategories from './AllCategories/AllCategories'
import Footer from './Footer/Footer'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import ProductDetail from './ProductDetail/ProductDetail'
import ProductListPage from './ProductListPage/ProductListPage'
import PrincipleList from './PrincipleList/PrincipleList'
import NewProductForm from './NewProductForm/NewProductForm'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import NewAccount from './NewAccount/NewAccount'
import './App.css'

const getAllCategories = () => {
  return fetch('https://polar-inlet-79605.herokuapp.com/api/categories', {
      method: 'GET',
      headers: {
          'Content-type': 'application/json'
      }
  })
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    console.log('responseJson', responseJson)
    return responseJson
  })
}

const allCategories = getAllCategories().then(categories => {
  return categories
})

const App = () => {
  const [ loginInfo, setLoginInfo ] = useState({ user: null, token: null })

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

  return (
    <Router>
      <div className='App'>
        <main>
          <Switch>
            <Route path='/about' render={routeProps => (
              <>  
                <PrincipleList 
                  allCategories={allCategories}
                  principles={principles}
                  {...routeProps}
                />
              </>  
            )} />
            <Route path='/account' render={routeProps => (
              <Account 
                allCategories={allCategories}
                {...routeProps}
              />
            )} />
            <Route path='/add-product' exact render={routeProps => (
              <NewProductForm
                allCategories={allCategories}
                loginInfo={loginInfo}
                setLoginInfo={setLoginInfo}
                {...routeProps}
              />
            )}/>
            <Route path='/all-categories' render={routeProps => (
              <AllCategories
                allCategories={allCategories}
                {...routeProps}
              />
            )}/>
            <Route path='/category/:categoryId/:slug' render={routeProps => (
              <ProductListPage
                allCategories={allCategories}
                routeProps={routeProps}
                history={routeProps.history}
              />
            )} />
            <Route path='/create-account' render={routeProps => (
              <NewAccount
                allCategories={allCategories}
                history={routeProps.history}
                loginInfo={loginInfo}
                setLoginInfo={setLoginInfo}
              />
            )} />
            <Route path='/forgot-password' render={routeProps => (
              <ForgotPassword 
                allCategories={allCategories}
                history={routeProps.history}
              />
            )} />
            <Route path='/login' render={routeProps => (
              <Login 
                allCategories={allCategories}
                history={routeProps.history}
                loginInfo={loginInfo}
                setLoginInfo={setLoginInfo}
              />
            )} />
            <Route path='/principles' render={(routeProps) => (
              <>
                <Header />
                <PrincipleList
                  allCategories={allCategories}
                  {...routeProps}
                  principles={fullPrinciples}

                />
                <Footer />
              </>
            )}/>

            <Route 
              path='/product/:productId/:slug'
              render={(routeProps) => (
              <>
                <Header />
                <ProductDetail
                  allCategories={allCategories}
                  routeProps={routeProps}
                />
                <Footer />
              </>
            )}/>

            <Route path='/' exact render={(routeProps) => (
              <>
                <Header />
                <LandingPage 
                  allCategories={allCategories}
                  {...routeProps}
                />
                <Footer />
              </>
            )}/>

            <Route render={(routeProps) => (
              <>
                <Header />
                <NotFoundPage
                  allCategories={allCategories}
                  {...routeProps}
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


App.defaultProps = {
  data: []
}

export default App