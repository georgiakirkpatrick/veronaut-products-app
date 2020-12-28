import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormPromptWithSub from '../FormPromptWithSub/FormPromptWithSub'
import FormTextInput from '../FormTextInput/FormTextInput'
import Header from '../Header/Header'
import './ForgotPassword.css'

const ForgotPassword = props => {
  const [forgotEmail, setForgotEmail] = useState('')

    function handleSubmitBasicAuth(e) {
        console.log('event', e)
        // e.preventDefault()

        // fetch('http://localhost:8000/api/auth/login', {
        // method: 'POST',
        // body: JSON.stringify({
        //     email: forgotEmail,
        // }),
        // headers: {
        //     'Content-type': 'application/json'
        // }}).then(
        //     (r) => {
        //     props.setLoginInfo(r);
        //     })
    }

  return (
    <form
        className='ForgotPassword'
        onSubmit={handleSubmitBasicAuth}
    >
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
                value={forgotEmail}
                change={event => {setForgotEmail(event.target.value)}}
            />
        </fieldset>
        <FormButton 
            buttonText='SEND EMAIL'
        />
        <Link to={`/login`} className='main-link'>
            Log in
        </Link>
    </form>
  )
}

export default ForgotPassword