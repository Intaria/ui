import type { ComponentProps } from 'react'

import { ark } from '@ark-ui/react/factory'

import './style.css'

export type TextareaProps = ComponentProps<typeof Textarea>

export const Textarea = ({children = null, ...props}) => (
    <ark.textarea {...props}>
        {children}
    </ark.textarea>
)