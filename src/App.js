import React, { Component } from 'react';
import './FontAwesomeIcons/FontAwesomeIcons';
import '@fortawesome/react-fontawesome';
import Header from './Header/Header';
import MenuSideDrawer from './MenuSideDrawer/MenuSideDrawer';
import Backdrop from './Backdrop/Backdrop';
import LandingPage from './LandingPage/LandingPage';
import ProductListPage from './ProductListPage/ProductListPage'
import Footer from './Footer/Footer';
import data from './DATA'
import './App.css';

// pages: LandingPage, ProductListPage

class App extends Component {
  state = {
    menuSideDrawerOpen: false
  }
  
  hamburgerToggleClickHandler = () => {
    console.log('hamburger was clicked')

    this.setState((prevState) => {
      return {menuSideDrawerOpen: !prevState.menuSideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({ menuSideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.menuSideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className='App'>
        <Header click={this.hamburgerToggleClickHandler}/>
        <MenuSideDrawer show={this.state.menuSideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>
          <LandingPage />
          <ProductListPage products={data.productList} selectedFilters={data.selectedFilterOptions} />
          <Footer />
        </main>
      </div>
    )
  }
}
  
App.defaultProps = {
  data: []
}

export default App;