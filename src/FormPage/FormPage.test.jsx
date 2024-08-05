import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormPage from './FormPage'

describe('FormPage', () => {
    it ('renders without crashing', () => {
        render(<FormPage />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormPage />)
        expect(tree).toMatchSnapshot()
    })
})