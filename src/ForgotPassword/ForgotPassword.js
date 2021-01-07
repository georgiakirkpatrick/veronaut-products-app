import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import Header from '../Header/Header'
import './ForgotPassword.css'

const ForgotPassword = () => {
  const [forgotEmail, setForgotEmail] = useState('')

  return (
    <form
        className='ForgotPassword'
    >
        <Router>
            <Header />
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
                handleClick={() => {}}
            />
                <Link to={`/login`} className='main-link'>
                    Log in
                </Link>
        </Router>
    </form>
  )
}

export default ForgotPassword