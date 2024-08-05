import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(
      <BrowserRouter>
          {ui}
      </BrowserRouter>
    )
}

describe('ScrollToTop', () => {
  it ('renders without crashing', () => {
    const route = '/some-route'
    renderWithRouter(<ScrollToTop />, { route })
  })

  it ('render the UI as expected', () => {
    const tree = render(
        <MemoryRouter>
          <ScrollToTop />
        </MemoryRouter>
      )
    expect(tree).toMatchSnapshot()
  })
})