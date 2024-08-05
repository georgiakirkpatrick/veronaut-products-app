import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormTitle from './FormTitle'

describe('FormTitle', () => {
        it ('renders without crashing', () => {
            render(<FormTitle />)
            screen.debug()
        })
    
        it ('render the UI as expected', () => {
            const tree = render(<FormTitle />)
            expect(tree).toMatchSnapshot()
        })
    })