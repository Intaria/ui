import type { ComponentProps } from 'react'

import { ark } from '@ark-ui/react/factory'

import './style.css'

export type ButtonProps = ComponentProps<typeof Button>

export const Button = ({children = null, ...props}) => (
    <ark.button {...props}>
        {children}
    </ark.button>
)