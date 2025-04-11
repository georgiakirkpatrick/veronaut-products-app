import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router'
import ReadMoreLink from './ReadMoreLink'

describe ('ReadMoreLink', () => {
  it ('renders without crashing', () => {
    render(<Router><ReadMoreLink /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><ReadMoreLink /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})