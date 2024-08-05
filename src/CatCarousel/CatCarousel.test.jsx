import React from 'react'
import { render, screen } from '@testing-library/react'
import CatCarousel from './CatCarousel'
import { describe, it, expect } from 'vitest'



describe ('CatCarousel', () => {
    it ('renders without crashing', () => {
        render(<CatCarousel />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<CatCarousel />)
        expect(tree).toMatchSnapshot()    
    })
})