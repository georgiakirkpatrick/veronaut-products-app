import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormCheckboxSection from './FormCheckboxSection'

describe('FormCheckboxSection', () => {
  it ('renders without crashing', () => {
    render(<FormCheckboxSection />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<FormCheckboxSection />)
    expect(tree).toMatchSnapshot()
  })
})