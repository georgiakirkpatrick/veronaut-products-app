import React from 'react'
import FormButton from '../FormButton/FormButton'
import './EmailSignUp.css'

const EmailSignUp = () => {
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
                    handleClick={() => {}}
                />
            </form>
        </section>
    )
}

export default EmailSignUp