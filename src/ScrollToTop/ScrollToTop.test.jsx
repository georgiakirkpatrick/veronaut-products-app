import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(
      <Router>
          {ui}
      </Router>
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