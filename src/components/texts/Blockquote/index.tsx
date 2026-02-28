import type { ComponentProps } from 'react'

import { ark } from '@ark-ui/react/factory'

import './style.css'

export type BlockquoteProps = ComponentProps<typeof Blockquote>

export const Blockquote = ({children = null, ...props}) => (
    <ark.blockquote {...props}>
        {children}
    </ark.blockquote>
)