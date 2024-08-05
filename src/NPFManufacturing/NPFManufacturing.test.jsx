import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NPFManufacturing from './NPFManufacturing'

describe('NPFManufacturing', () => {
    it ('renders without crashing', () => {
        render(<NPFManufacturing />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<NPFManufacturing />)
        expect(tree).toMatchSnapshot()
    })
})