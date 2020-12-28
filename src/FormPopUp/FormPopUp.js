import React from 'react'
import FormButton from '../FormButton/FormButton'
// import formData from '../FORM_DATA'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FormPopUp.css'

const FormPopUp = props => {
    return (
        <section className={props.status}
            id={props.id}
        >
            <button
                className='close-button' 
                type='button'
                onClick={props.close}
            >
                <FontAwesomeIcon icon='times' size='lg' />
            </button>
            <h1>
                {props.title}
            </h1>
            {props.children}
            <FormButton 
                buttonText={props.buttonText}
                click={props.submit}
            />
        </section>
    )
}

export default FormPopUp