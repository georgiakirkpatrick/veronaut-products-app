import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormDropdown from './FormDropdown'

describe('FormDropdown', () => {
  it ('renders without crashing', () => {
    render(<FormDropdown />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<FormDropdown />)
    expect(tree).toMatchSnapshot()
  })
})