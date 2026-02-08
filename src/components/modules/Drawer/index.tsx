import './style.css'

import {Drawer as BaseDrawer} from '@mantine/core'

import type {DrawerProps as BaseDrawerProps} from '@mantine/core'

export interface DrawerProps extends BaseDrawerProps {
    children: React.ReactNode
}

export const Drawer = ({children, ...props}: DrawerProps) => {
    return (
        <BaseDrawer 
            {...props}
        >                      
            {children}
        </BaseDrawer>
    )
}

