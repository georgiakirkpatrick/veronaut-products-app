import React from 'react'
import { render, screen } from '@testing-library/react'
import NPFPermittedCategories from './NPFPermittedCategories'
import { describe, it, expect } from 'vitest'

describe ('NPFPermittedCategories', () => {
    it ('renders without crashing', () => {
        render(<NPFPermittedCategories />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<NPFPermittedCategories />)
        expect(tree).toMatchSnapshot()    
    })
})