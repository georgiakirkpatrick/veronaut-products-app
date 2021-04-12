import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
// import Header from '../Header/Header'
import './ForgotPassword.css'

const ForgotPassword = props => {
    const [forgotEmail, setForgotEmail] = useState('')

    const handleSubmitBasicAuth = event => {
        event.preventDefault()
    
        fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: forgotEmail,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.status !== 200) {
                console.log('There was a problem.  Status code: ' + response.status)
            }
            return response.json()
        })
        .then (responseJson => {
            props.setLoginInfo(responseJson)
        })
        // .then make sure a user with that email/username exists.  If it does exist, send an email 
        // to the user with a password reset link.  If it does not exist, return a message 
        // saying so.
    }

    return (
        <form
            className='ForgotPassword'
        >
            
            <header>
                <FormTitle titleText='Forgot your password?' />
            </header>

            <FormPromptWithSub
                prompt='Enter your email and we will send you a link to reset your password.'
            />
        
            <fieldset className='ForgotPassword__fieldset'>
                <FormTextInput
                    id='forgot-email'
                    prompt='Email'
                    name='forgotEmail'
                    currentValue={forgotEmail}
                    handleChange={event => {setForgotEmail(event.target.value)}}
                />
            </fieldset>
            <FormButton 
                buttonText='SEND EMAIL'
                handleClick={event => handleSubmitBasicAuth(event)}
            />
            <Link to={`/login`} className='main-link'>
                Log in
            </Link>
        </form>
    )
}

export default ForgotPassword