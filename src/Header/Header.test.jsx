import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe ('Header', () => {
  it ('renders without crashing', () => {
    render(<Router><Header /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><Header /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})