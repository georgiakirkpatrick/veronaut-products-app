import React from 'react';
import './NewsletterSignUp.css';

function NewsletterSignUp() {
    return (
        <form className='NewsletterSignUp'>
            <label htmlFor='newsletter'>Want updates?</label>
            <input type='text' name='newsletter' id='newsletter'></input>
            <button type='button'>Submit</button>
        </form>
    )
}

export default NewsletterSignUp;