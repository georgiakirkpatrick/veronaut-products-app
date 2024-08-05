import React from 'react'
import { render, screen } from '@testing-library/react'
import NPFProhibFibers from './NPFProhibFibers'
import { describe, it, expect } from 'vitest'

describe ('NPFProhibFibers', () => {
  it ('renders without crashing', () => {
    render(<NPFProhibFibers />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<NPFProhibFibers />)
    expect(tree).toMatchSnapshot()
  })
})