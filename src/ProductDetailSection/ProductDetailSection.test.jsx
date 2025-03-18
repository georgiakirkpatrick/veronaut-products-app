import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductDetailSection from './ProductDetailSection'
import { describe, it, expect } from 'vitest'

describe ('ProductDetailSection', () => {
  it ('renders without crashing', () => {
    render(<ProductDetailSection />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<ProductDetailSection />)
    expect(tree).toMatchSnapshot()    
  })
})