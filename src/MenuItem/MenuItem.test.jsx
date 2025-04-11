import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router'
import MenuItem from './MenuItem'

describe ('MenuItem', () => {
  it ('renders without crashing', () => {
    render(<Router><MenuItem /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><MenuItem /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})