import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFNotions from './NPFNotions'

describe('NPFNotions', () => {
  it ('renders without crashing', () => {
    render(<NPFNotions />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NPFNotions />)
    expect(tree).toMatchSnapshot()
  })
})