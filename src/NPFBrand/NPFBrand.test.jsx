import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFBrand from './NPFBrand'

describe('NPFBrand', () => {
    it ('renders without crashing', () => {
        render(<NPFBrand />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<NPFBrand />)
        expect(tree).toMatchSnapshot()
    })
})