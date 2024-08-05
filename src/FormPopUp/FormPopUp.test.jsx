import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormPopUp from './FormPopUp'

describe('FormPopUp', () => {
    it ('renders without crashing', () => {
        render(<FormPopUp />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormPopUp />)
        expect(tree).toMatchSnapshot()
    })
})