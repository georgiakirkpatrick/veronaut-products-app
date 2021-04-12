import React from 'react'
import FormButton from '../FormButton/FormButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FormPopUp.css'

const FormPopUp = props => {
    return (
        <section className={props.status}
            id={props.id}
        >
            <button
                className='FormPopUp__close-button' 
                type='button'
                onClick={props.close}
            >
                <FontAwesomeIcon icon='times' size='lg' />
            </button>
            
            <header>
                <h1>
                    {props.title}
                </h1>
            </header>
                {props.children}
            <FormButton 
                buttonText={props.buttonText}
                handleClick={props.submit}
                type={props.buttonType}
            />
        </section>
    )
}

FormPopUp.defaultProps = {
    id: 1,
    close: () => {},
    title: '',
    children: ''
}

export default FormPopUp