import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe ('Footer', () => {
  it ('renders without crashing', () => {
    render(<Footer />)
    screen.debug()
  })

  it ('renders the UI as expected', () => {
    const tree = render(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})