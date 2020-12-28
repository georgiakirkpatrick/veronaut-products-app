import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormTextInput from '../FormTextInput/FormTextInput'
import Header from '../Header/Header'
import './Login.css'

const Login = props => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

    function handleSubmitBasicAuth(e) {
        console.log('event', e)
        // e.preventDefault()

        // fetch('http://localhost:8000/api/auth/login', {
        // method: 'POST',
        // body: JSON.stringify({
        //     username: loginEmail,
        //     password: loginPassword
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
        className='Login'
        onSubmit={handleSubmitBasicAuth}
    >
        <Header />
        <header>
            <FormTitle titleText='Log in' />
        </header> 
      
        <fieldset className='Login__fieldset'>
            <FormTextInput
                id='login-email'
                prompt='Email'
                name='loginEmail'
                value={loginEmail}
                change={event => {setLoginEmail(event.target.value)}}
            />
            <FormTextInput
                id='login-password'
                prompt='Password'
                name='loginPassword'
                value={loginPassword}
                change={event => {setLoginPassword(event.target.value)}}
            />
            <Link to='/forgot-password'>Forgot password?</Link>
        </fieldset>
        <FormButton 
            buttonText='SIGN IN'
        />
        <Link to={`/create-account`} className='main-link'>
          Create an account
        </Link>
        {/* <a href='www.google.com'>Create an account</a> */}
    </form>
  )
}

export default Login