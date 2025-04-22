import React, { useState } from 'react'
// import config from '../config'
import { Link, useNavigate } from 'react-router-dom'
import FormButton from '../FormButton/FormButton'
import FormTitle from '../FormTitle/FormTitle'
import FormTextInput from '../FormTextInput/FormTextInput'
// import TokenService from '../services/token-service'
import './NewAccount.css'

// import bcrypt from "bcryptjs-react"

const NewAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const submitNewAccount = event => {
    const missingFields = []

    const requiredFields = {
      email: email,
      password: password
    }

    Object.keys(requiredFields).forEach(key => {
      !requiredFields[key] && missingFields.push(key.replace( /([A-Z])/g, " $1" ).toLowerCase())
    })

    if (missingFields.length === 1) {
      alert(`Please complete the '${missingFields[0]}' field`)
    } else if (missingFields.length > 1) {
      alert(`Please complete the following fields: ${missingFields.map(field => `
        ${field}`)}
      `)
    } else if (password !== confirmPassword) {
      alert(`The passwords do not match`)
    }
     else if (missingFields.length === 0) {
        event.preventDefault

        const hashedPassword = pw => {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(pw, salt)

            return hash
        }

        const data = {
            "email": email,
            "password": hashedPassword()       
        }

        console.log('data', data)

        const postRequestParams = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(`${import.meta.env.development.development.VITE_API_URL}/api/users`,
            postRequestParams
        )
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Server responded with an error!')
            }
            return response.json()
        })
        .then(responseJson => {
            TokenService.saveAuthToken(
                TokenService.makeBasicAuthToken(responseJson.email, responseJson.password)
            )
        })

        navigate(-1)
        
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
  }

  return (
    <form 
      className='NewAccount'
    >
      <header>
        <FormTitle titleText='Create an account' />
      </header> 
  
      <fieldset className='NewAccount__fieldset'>
        <FormTextInput
          id='create-email'
          prompt='Email'
          name='email'
          currentValue={email}
          handleChange={event => {setEmail(event.target.value)}}
        />

        <FormTextInput
          id='create-password'
          prompt='Password'
          name='password'
          currentValue={password}
          handleChange={event => {setPassword(event.target.value)}}
        />

        <FormTextInput
          id='repeat-password'
          prompt='Repeat password'
          name='confirmPassword'
          currentValue={confirmPassword}
          handleChange={event => {setConfirmPassword(event.target.value)}}
        />
      </fieldset>

      <FormButton 
        buttonText='CREATE ACCOUNT'
        handleClick={() => submitNewAccount()}
      />

      <Link to='/login'>Log in</Link>
    </form>
  )
}

export default NewAccount