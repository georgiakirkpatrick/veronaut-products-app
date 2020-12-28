import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import FormTitle from '../FormTitle/FormTitle'
import FormButton from '../FormButton/FormButton'
import FormTextInput from '../FormTextInput/FormTextInput'
import Header from '../Header/Header'
import './NewAccount.css'

const NewAccount = props => {
  const [createEmail, setCreateEmail] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <form 
      className='NewAccount'
    >
      <Header />
      <header>
        <FormTitle titleText='Create an account' />
      </header> 
      
        <fieldset className='NewAccount__fieldset'>
          <FormTextInput
            id='create-email'
            prompt='Email'
            name='createEmail'
            value={createEmail}
            change={event => {setCreateEmail(event.target.value)}}
          />
          <FormTextInput
            id='create-password'
            prompt='Password'
            name='createPassword'
            value={createPassword}
            change={event => {setCreatePassword(event.target.value)}}
          />
          <FormTextInput
            id='repeat-password'
            prompt='Repeat password'
            name='repeatPassword'
            value={repeatPassword}
            change={event => {setRepeatPassword(event.target.value)}}
          />
        </fieldset>
      <FormButton 
        buttonText='CREATE ACCOUNT'
      />
      <Link to='/login'>Log in</Link>
    </form>
  )
}

export default NewAccount