import type { ComponentProps } from 'react'

import { ark } from '@ark-ui/react/factory'

import './style.css'

export type CodeProps = ComponentProps<typeof Code>

export const Code = ({children = null, ...props}) => (
    <ark.code {...props}>
        {children}
    </ark.code>
)