import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EmailSignUp from './EmailSignUp'

describe ('EmailSignUp', () => {
  it ('renders without crashing', () => {
    render(<EmailSignUp />)
    screen.debug()
  })

  it ('renders the UI as expected', () => {
    const tree = render(<EmailSignUp />)
    expect(tree).toMatchSnapshot()    
  })
})