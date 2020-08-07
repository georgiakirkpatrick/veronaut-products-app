import React from 'react';
import './EmailSignUp.css';

function EmailSignUp() {
    return (
        <section>
            <header>
                <h3>
                    Save your favorite brands and styles
                </h3>
            </header>
            <p>
                Create an account and save items to buy later.
            </p>
            <form>
                <label htmlFor='email-signup'>Email address</label>
                <input type='text' name='email-signup' id='email-signup'></input>
                <button type='button'>Create account</button>
            </form>
        </section>
    )
};

export default EmailSignUp;