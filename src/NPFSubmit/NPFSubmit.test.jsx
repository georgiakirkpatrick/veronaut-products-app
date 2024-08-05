import React from 'react'
import { render, screen } from '@testing-library/react'
import NPFSubmit from './NPFSubmit'
import { describe, it, expect } from 'vitest'

describe ('NPFSubmit', () => {
    it ('renders without crashing', () => {
        render(<NPFSubmit />)
        screen.debug()
    })

    it('renders the UI as expected', () => {
        const tree = render(<NPFSubmit />)
        expect(tree).toMatchSnapshot()    
    })
})