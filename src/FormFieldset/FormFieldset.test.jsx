import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormFieldset from './FormFieldset'

describe('FormFieldset', () => {
  it ('renders without crashing', () => {
    render(<FormFieldset />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
      const tree = render(<FormFieldset />)
    expect(tree).toMatchSnapshot()
    })
})