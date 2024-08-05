import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import { describe, it, expect } from 'vitest';

describe ('ProductDetail', () => {
    it ('renders without crashing', () => {
        render(<ProductDetail />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<ProductDetail />)
        expect(tree).toMatchSnapshot()    
    })
})