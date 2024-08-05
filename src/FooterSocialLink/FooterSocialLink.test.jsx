import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FooterSocialLink from './FooterSocialLink'

describe('FooterSocialLink', () => {
  it('renders without crashing', () => {
    render(<FooterSocialLink />)
    screen.debug()
  })

  it ('renders the UI as expected', () => {
    const tree = render(<FooterSocialLink />)
    expect(tree).toMatchSnapshot()
  })
})    