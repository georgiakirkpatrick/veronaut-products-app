import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormButton from './FormButton'

describe('FormButton', () => {
  it ('renders without crashing', () => {
    render(<FormButton />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<FormButton />)
    expect(tree).toMatchSnapshot()
  })
})