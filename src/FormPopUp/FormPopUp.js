import React from 'react'
import FormButton from '../FormButton/FormButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FormPopUp.css'

const FormPopUp = props => {
    const {
        buttonText,
        buttonType,
        children,
        close,
        id,
        status,
        submit,
        title
    } = props

    return (
        <section className={status}
            id={id}
        >
            <button
                className='FormPopUp__close-button' 
                type='button'
                onClick={close}
            >
                <FontAwesomeIcon icon='times' size='lg' />
            </button>
            
            <header>
                <h1>
                    {title}
                </h1>
            </header>
            
            {children}

            <FormButton 
                buttonText={buttonText}
                handleClick={submit}
                type={buttonType}
            />
        </section>
    )
}

FormPopUp.defaultProps = {
    buttonText: '',
    buttonType: 'button',
    children: <div />,
    close: () => {},
    id: 1,
    status: '',
    submit: () => {},
    title: ''
}

export default FormPopUp