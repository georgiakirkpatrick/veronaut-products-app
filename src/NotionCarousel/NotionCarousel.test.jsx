import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NotionCarousel from './NotionCarousel'

describe('NotionCarousel', () => {
  it ('renders without crashing', () => {
    render(<NotionCarousel />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<NotionCarousel />)
    expect(tree).toMatchSnapshot()
  })
})