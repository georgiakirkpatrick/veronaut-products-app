import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FabricCarousel from './FabricCarousel'

describe ('FabricCarousel', () => {
  it ('renders without crashing', () => {
    render(<FabricCarousel />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<FabricCarousel />)
    expect(tree).toMatchSnapshot()    
  })
})