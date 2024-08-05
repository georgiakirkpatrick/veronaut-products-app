import React from 'react'
import { render, screen } from '@testing-library/react'
import NPFSizes from './NPFSizes'
import { describe, it, expect } from 'vitest'

describe ('NPFSizes', () => {
  it ('renders without crashing', () => {
    render(<NPFSizes />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<NPFSizes />)
    expect(tree).toMatchSnapshot()    
  })
})