import React from 'react';
import FormButton from '../FormButton/FormButton'
import './NewsletterSignUp.css';

const NewsletterSignUp = () => {
  return (
    <form className='NewsletterSignUp'>
      <p>Want updates?</p>
     
      <fieldset>
        <label htmlFor='newsletter'>Email </label>
        <input type='text' name='newsletter' id='newsletter'></input>
      </fieldset>
     
      <FormButton
        buttonText='SUBMIT'
        click={() => {}}
      />
    </form>
  )
}

export default NewsletterSignUp;