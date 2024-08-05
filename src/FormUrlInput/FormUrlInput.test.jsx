import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormUrlInput from './FormUrlInput'

describe('FormUrlInput', () => {
    it ('renders without crashing', () => {
        render(<FormUrlInput />)
        screen.debug()
    })

    it ('render the UI as expected', () => {
        const tree = render(<FormUrlInput />)
        expect(tree).toMatchSnapshot()
    })
})