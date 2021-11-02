import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormButton from '../FormButton/FormButton'
import FormTitle from '../FormTitle/FormTitle'
import FormTextInput from '../FormTextInput/FormTextInput'
import './NewAccount.css'

const NewAccount = () => {
    const [createEmail, setCreateEmail] = useState('')
    const [createPassword, setCreatePassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

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
                    name='createEmail'
                    currentValue={createEmail}
                    handleChange={event => {setCreateEmail(event.target.value)}}
                />

                <FormTextInput
                    id='create-password'
                    prompt='Password'
                    name='createPassword'
                    currentValue={createPassword}
                    handleChange={event => {setCreatePassword(event.target.value)}}
                />

                <FormTextInput
                    id='repeat-password'
                    prompt='Repeat password'
                    name='repeatPassword'
                    currentValue={repeatPassword}
                    handleChange={event => {setRepeatPassword(event.target.value)}}
                />
            </fieldset>

            <FormButton 
                buttonText='CREATE ACCOUNT'
                handleClick={() => {}}
            />

            <Link to='/login'>Log in</Link>
        </form>
    )
}

export default NewAccount