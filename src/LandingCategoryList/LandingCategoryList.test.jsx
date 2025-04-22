import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import LandingCategoryList from './LandingCategoryList'

describe ('LandingCategoryList', () => {
  it ('renders without crashing', () => {
    render(<Router><LandingCategoryList /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><LandingCategoryList /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})