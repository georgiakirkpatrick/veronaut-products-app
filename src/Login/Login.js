import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormTextInput from '../FormTextInput/FormTextInput'
import './Login.css'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  return (
    <form
      className='Login'
    >
      
      <header>
          <FormTitle titleText='Log in' />
      </header> 
    
      <fieldset className='Login__fieldset'>
          <FormTextInput
              id='login-email'
              prompt='Email'
              name='loginEmail'
              currentValue={loginEmail}
              handleChange={event => {setLoginEmail(event.target.value)}}
          />
          <FormTextInput
              id='login-password'
              prompt='Password'
              name='loginPassword'
              currentValue={loginPassword}
              handleChange={event => {setLoginPassword(event.target.value)}}
          />
          <Link to='/forgot-password'>Forgot password?</Link>
      </fieldset>
      <FormButton 
          buttonText='SIGN IN'
          handleClick={() => {}}
      />
      <Link to={`/create-account`} className='main-link'>
        Create an account
      </Link>
    </form>
  )
}

export default Login