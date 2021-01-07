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
                Create an account and save items to buy later.
            </p>

            <form>
                <fieldset>
                    <label htmlFor='email-signup'>Email </label>
                    <input type='text' name='email-signup' id='email-signup'></input>
                </fieldset>

                <FormButton
                    buttonText='CREATE ACCOUNT'
                    handleClick={() => {}}
                />
            </form>
        </section>
    )
}

export default EmailSignUp