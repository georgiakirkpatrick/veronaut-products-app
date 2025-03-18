import React from 'react'
import { render, screen } from '@testing-library/react'
import NewsletterSignup from './NewsletterSignUp'
import { describe, it, expect } from 'vitest'

describe ('NewsletterSignup', () => {
  it ('renders without crashing', () => {
    render(<NewsletterSignup />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<NewsletterSignup />)
    expect(tree).toMatchSnapshot()    
  })
})