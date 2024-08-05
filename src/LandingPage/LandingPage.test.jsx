import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './LandingPage'

describe ('LandingPage', () => {
  it ('renders without crashing', () => {
    render(<LandingPage />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<LandingPage />)
    expect(tree).toMatchSnapshot()    
  })
})