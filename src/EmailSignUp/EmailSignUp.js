import React, { useState } from 'react'
import FormButton from '../FormButton/FormButton'
import AuthApiService from '../services/auth-api-service'
import './EmailSignUp.css'

const EmailSignUp = () => {
    const [error, setError] = useState({error: null})
    
    const handleSubmit = ev => {
        const {
            email,
            password,
            handle,
            name,
            website,
            profile_pic,
            bio,
            pub,
            org_affiliation
        } = ev.target

        setError({ error: null })

        AuthApiService.createUser({
            email: email.value,
            password: password.value,
            handle: handle.value,
            name: name.value,
            website: website.value,
            profile_pic: profile_pic.value,
            bio: bio.value,
            public: pub.value,
            org_affiliation: org_affiliation.value
        })
        // .then(user => {
        //     email.value = '',
        //     password.value = '',
        //     handle.value = '',
        //     name.value = '',
        //     website.value = '',
        //     profile_pic.value = '',
        //     bio.value = '',
        //     pub.value = '',
        //     org_affiliation.value = ''
        //     onRegistrationSuccess()
        // })
        .catch(res => {
            setError({ error: res.error })
        })
    }

    return (
        <section className='EmailSignUp'>
            <header>
                <h2>
                    Save your favorite products
                </h2>
            </header>

            <p>
                Create an account to save your favorite products.
            </p>

            <form>
                <fieldset>
                    <label htmlFor='email-signup'>Email </label>
                    <input type='text' name='email-signup' id='email-signup'></input>
                </fieldset>

                <FormButton
                    buttonText='Create account'
                    handleClick={event => { handleSubmit(event) }}
                />
            </form>
        </section>
    )
}

export default EmailSignUp