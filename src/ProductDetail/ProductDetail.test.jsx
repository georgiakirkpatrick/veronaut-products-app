import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router'
import ProductDetail from './ProductDetail'
import { describe, it, expect } from 'vitest'

describe ('ProductDetail', () => {
  it ('renders without crashing', () => {
    render(<Router><ProductDetail /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><ProductDetail /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})