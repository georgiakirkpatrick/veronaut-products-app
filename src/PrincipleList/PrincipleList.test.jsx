import React from 'react'
import { render, screen } from '@testing-library/react'
import PrincipleList from './PrincipleList'
import { describe, it, expect } from 'vitest'

const principles = [
  {
    id: 1,
    title: 'Good design', 
    description: 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.',
    symbol: 'times'
  }
]

describe ('PrincipleList', () => {
  it ('renders without crashing', () => {
    render(<PrincipleList />)
    screen.debug()
  })

  it('renders the UI as expected', () => {
    const tree = render(<PrincipleList principles={principles} />)
    expect(tree).toMatchSnapshot()    
  })
})