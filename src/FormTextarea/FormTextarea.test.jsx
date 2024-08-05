import React from 'react'
import { render, screen } from '@testing-library/react'
import FormTextarea from './FormTextarea'
import { describe, it, expect } from 'vitest'

describe ('FormTextarea', () => {
  it ('renders without crashing', () => {
    render(<FormTextarea />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<FormTextarea />)
    expect(tree).toMatchSnapshot()    
  })
})