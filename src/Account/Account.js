import React from 'react'
import Header from '../Header/Header'

const Account = props => {
    console.log('props.history', props.history)
    console.log('props.loginInfo', props.loginInfo)
    console.log('props.setLoginInfo', props.setLoginInfo)

    return (
        <>
            <Header />
            <p>
                Private account info
            </p>
        </>
    )
    
}

export default Account