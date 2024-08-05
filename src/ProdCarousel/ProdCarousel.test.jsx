import React from 'react'
import { render, screen } from '@testing-library/react'
import ProdCarousel from './ProdCarousel'
import { describe, it, expect } from 'vitest'

describe ('ProdCarousel', () => {
  it ('renders without crashing', () => {
    render(<ProdCarousel />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<ProdCarousel />)
    expect(tree).toMatchSnapshot()    
  })
})