import React from 'react'
import { render, screen } from '@testing-library/react'
import Principle from './Principle'
import { describe, it, expect } from 'vitest'

describe ('Principle', () => {
  it ('renders without crashing', () => {
    render(<Principle />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<Principle />)
    expect(tree).toMatchSnapshot()    
  })
})