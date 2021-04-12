import React from 'react'
import './FormPage.css'

const FormPage = props => {
    const title = props.title ? <h1>{props.title}</h1> : <div className='empty' />

    return (
        <section className='FormPage'>
            {title}                                                                                                                                                                                                                                                                               
            <form id='form-page'>
                {props.children}
            </form>

            <div>
                {props.nextError}
            </div>
        </section>
    )
}

FormPage.defaultProps = {
    title: '',
    children: ''
}

export default FormPage