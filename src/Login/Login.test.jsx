import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import { handleLoginSubmit } from './Login'

describe ('Login', () => {
  it ('renders without crashing', () => {
    render(<Login />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Login />)
    expect(tree).toMatchSnapshot()    
  })

    // it('checks that all required fields are supplied', () => {
    //     const loginEmail = 'test@email.com'
    //     const loginPassword = 'testpassword'

    //     handleLoginSubmit()
    // })
})