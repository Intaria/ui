import './style.css'

import {Alert as BaseMessage} from '@mantine/core'
import type {AlertProps as BaseMessageProps} from '@mantine/core'

interface MessageProps extends Omit<BaseMessageProps, "radius" | "color" | "variant"> {
    variant?: "filled" | "light" | "outline" | "transparent" | "unstyled" 
    color?: string
    theme?: string
}

const Message = ({children = null, variant = 'filled', theme = 'primary', color = '', ...props}: MessageProps) => {
    return (
        <BaseMessage data-variant={variant} data-theme={theme} data-color={color} {...props}>
            {children}
        </BaseMessage>
    )
}

export {Message}
export type {MessageProps}