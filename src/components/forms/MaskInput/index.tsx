'use client'

import {IMaskInput} from 'react-imask'

import {Input, type InputProps} from '~ui/components'

import type {IMaskInputProps} from 'react-imask'

import './style.css'

type MaskInputProps = InputProps & IMaskInputProps<HTMLInputElement>

const MaskInput = ({mask, ...props}: MaskInputProps) => {
    <Input
        mask={mask}
        component={IMaskInput}
        {...props}
    />
}

export {MaskInput}
