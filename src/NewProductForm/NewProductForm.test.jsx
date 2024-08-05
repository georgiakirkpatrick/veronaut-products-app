import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import NewProductForm from './NewProductForm'

describe('NewProductForm', () => {
  it ('renders without crashing', () => {
    render(<Router><NewProductForm /></Router>)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<Router><NewProductForm /></Router>)
    expect(tree).toMatchSnapshot()
  })
})