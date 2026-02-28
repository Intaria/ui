import type { ComponentProps } from 'react'

import { ark } from '@ark-ui/react/factory'

import './style.css'

export type KbdProps = ComponentProps<typeof Kbd>

export const Kbd = ({children = null, ...props}) => (
    <ark.kbd {...props}>
        {children}
    </ark.kbd>
)