import React from 'react'
import { BrowserRouter as Router } from 'react-router'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Category from './Category'

describe ('Category', () => {
  it ('renders without crashing', () => {
    render(<Router><Category /></Router>)
    screen.debug()
  })

  it ('renders the UI as expected', () => {
    const tree = render(<Router><Category /></Router>)
    expect(tree).toMatchSnapshot()
  })
})