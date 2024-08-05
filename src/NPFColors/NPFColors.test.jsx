import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFColors from './NPFColors'

describe('NPFColors', () => {
  it ('renders without crashing', () => {
    render(<NPFColors />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NPFColors />)
    expect(tree).toMatchSnapshot()
  })
})