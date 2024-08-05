import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormTextInput from '../FormTextInput/FormTextInput'
import TokenService from '../services/token-service'
import bcrypt from "bcryptjs-react"
import './Login.css'

const Login = ({
  routeProps = {
    match: {
      params: {
        categoryId: '1'
      }
    }
  }
}) => {
  const [error, setError] = useState(null)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const history = useNavigate()

  const advancePage = () => {
    console.log('routeProps', routeProps)

    const referrer = routeProps.location.state
      ? routeProps.location.state.referrer
      : '/'

    history.push(referrer)
  }

  const handleLoginSubmit = event => {
    if (loginEmail === '' && loginPassword === '') {
       alert('Please enter your email and password')
    } else if (loginEmail === '' && loginPassword !== '') {
      alert('Please enter your email')
    } else if (loginEmail !== '' && loginPassword === '') {
      alert('Please enter your password')
    } else {
      event.preventDefault()

      const hashedPassword = pw => {
        const salt = bcrypt.genSaltSync(10)
          const hash = bcrypt.hashSync(pw, salt)

          return hash
      }

      AuthApiService.postLogin({
        email: loginEmail,
        password: hashedPassword(loginPassword)
      })
      .then(response => {
        console.log('response', response)
        setLoginEmail('')
        setLoginPassword('')
        TokenService.saveAuthToken(response.authToken)
      })
      .catch(response => {
        setError(response.error)
        console.log('error', error)
      })

      advancePage()
    }
  }

  return (
    <form className='Login'>
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
        handleClick={event => handleLoginSubmit(event)}
      />

      <Link to={`/create-account`} className='main-link'>
        Create an account
      </Link>
    </form>
  )
}

export default Login