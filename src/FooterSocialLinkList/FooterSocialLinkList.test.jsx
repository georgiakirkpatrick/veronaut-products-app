import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FooterSocialLinkList from './FooterSocialLinkList'

describe('FooterSocialLinkList', () => {
  it ('renders without crashing', () => {
    render(<FooterSocialLinkList />)
    screen.debug()
  })

  it ('render the UI as expected', () => {
    const tree = render(<FooterSocialLinkList />)
    expect(tree).toMatchSnapshot()
  })
})