import React from 'react'
import './ErrorPageApi.css'

const ErrorPageApi = () => {
  return (
    <section className='ErrorPageApi'>
      <header>
        <h2>
          There Appears To Be An Error
        </h2>

        <p>
          There is a problem. This page will not work without a connection to the server. Please check your internet connection and refresh this page.
        </p>
        
        <p>
          If the problem persists, please write me an email at <a href='mailto:veronautfashion@gmail.com' target='_blank' rel="noopener noreferrer">veronautfashion@gmail.com</a> and let me know!
        </p>
      </header>
    </section>
  )
}

export default ErrorPageApi