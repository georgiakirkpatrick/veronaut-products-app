import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TextBlock from './TextBlock'

describe ('TextBlock', () => {
  it ('renders without crashing', () => {
    render(<TextBlock />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<TextBlock />)
    expect(tree).toMatchSnapshot()    
  })
})