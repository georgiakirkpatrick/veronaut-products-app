import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FilterButtonSection from './FilterButtonSection'

describe ('FilterButtonSection', () => {
    it ('renders without crashing', () => {
        render(<FilterButtonSection />)
        screen.debug()
    })

    it ('renders the UI as expected', () => {
        const tree = render(<FilterButtonSection />)
        expect(tree).toMatchSnapshot()    
    })
})