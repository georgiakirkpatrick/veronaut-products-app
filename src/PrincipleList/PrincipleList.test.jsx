import React from 'react';
import { render, screen } from '@testing-library/react';
import PrincipleList from './PrincipleList';
import { describe, it, expect } from 'vitest';

const principles = [
    {
        id: 1821,
        title: 'Good design', 
        description: 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.'
    },
    {
        id: 1822,
        title: 'Ethical',
        description: 'We report which brands have the most transparent supply chains, and which brands prioritize worker safety, living wages, and freedom of association (the right to join a union).'
    },
    {
        id: 1823,
        title: 'Sustainable',
        description: 'We feature clothing made with natural and cellulose-based fibers, with exceptions for a few categories like outerwear and swimwear.  While we include thoughtfully-sourced wool products, we exclude leather and fur.'
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