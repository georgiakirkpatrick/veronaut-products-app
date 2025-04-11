import React from 'react'
import { render, screen } from '@testing-library/react'
import Product from './Product'
import { BrowserRouter as Router } from 'react-router'
import { describe, it, expect } from 'vitest'

const productProps = {
    id: 1999,
    categoryId: '369',
    pathToImg: 'www.google.com',
    imgAlt: 'Woman in dress',
    brand: 'Sezane',
    productTitle: 'long-sleeved dress',
    price: 98
}

describe ('Product', () => {
  it ('renders without crashing', () => {
    render(<Router><Product /></Router>)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Router><Product /></Router>)
    expect(tree).toMatchSnapshot()    
  })
})