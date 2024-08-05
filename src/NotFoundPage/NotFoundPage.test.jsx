import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
    it ('renders without crashing', () => {
        render(<NotFoundPage />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<NotFoundPage />)
        expect(tree).toMatchSnapshot()
    })
})