import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFFabricsQuestion from './NPFFabricsQuestion'

describe('NPFFabricsQuestion', () => {
  it ('renders without crashing', () => {
    render(<NPFFabricsQuestion />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NPFFabricsQuestion />)
    expect(tree).toMatchSnapshot()
  })
})