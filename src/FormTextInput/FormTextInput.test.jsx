import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormTextInput from './FormTextInput'

describe('FormTextInput', () => {
    it ('renders without crashing', () => {
        render(<FormTextInput />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormTextInput />)
        expect(tree).toMatchSnapshot()
    })
})