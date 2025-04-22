import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'

describe('ForgotPassword', () => {
  it ('renders without crashing', () => {
    render(<Router><ForgotPassword /></Router>)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<Router><ForgotPassword /></Router>)
    expect(tree).toMatchSnapshot()
  })
})