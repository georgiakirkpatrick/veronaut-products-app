import React from 'react';
import { render, screen } from '@testing-library/react';
import Principle from './Principle';
import { describe, it, expect } from 'vitest';

const principleDescription = 'We value versatile styles that bring out our best selves in the office and at happy hour.  That hold up on our bike commutes and school pick-ups.  Our ideal clothing is bra-friendly, easy care, and has pockets.'
const principleTitle = 'Good design'

describe ('Principle', () => {
    it ('renders without crashing', () => {
        render(<Principle />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<Principle principleTitle={principleTitle} principleDescription={principleDescription} />)
        expect(tree).toMatchSnapshot()    
    })
})