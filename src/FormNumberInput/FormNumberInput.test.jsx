import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormNumberInput from './FormNumberInput'

describe('FormNumberInput', () => {
    it ('renders without crashing', () => {
        render(<FormNumberInput />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormNumberInput />)
        expect(tree).toMatchSnapshot()
    })
})