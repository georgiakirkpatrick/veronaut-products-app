import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFFooter from './NPFFooter'

describe('NPFFooter', () => {
  it ('renders without crashing', () => {
    render(<NPFFooter />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NPFFooter />)
    expect(tree).toMatchSnapshot()
  })
})