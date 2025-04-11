import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router'
import NewProductForm from './NewProductForm'

describe('NewProductForm', () => {
  it.skip ('renders without crashing', () => {
    render(<Router><NewProductForm /></Router>)
    screen.debug()
  }, 1000)

  it.skip ('render the UI as expected', () => {
    const tree = render(<Router><NewProductForm /></Router>)
    expect(tree).toMatchSnapshot()
  }, 1000)
})