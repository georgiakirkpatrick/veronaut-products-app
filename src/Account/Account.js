import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Account = props => {
   return (
        <>
            <Header allCategories={props.allCategories}/>
            <p>
                Private account info
            </p>
            <Footer />
        </>
    )
    
}

export default Account