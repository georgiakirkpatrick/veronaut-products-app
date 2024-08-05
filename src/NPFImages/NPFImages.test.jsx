import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFImages from './NPFImages'

describe('NPFImages', () => {
  it ('renders without crashing', () => {
    render(<NPFImages />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NPFImages />)
    expect(tree).toMatchSnapshot()
  })
})