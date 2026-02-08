import './style.css'

import {useDrawerStore} from '~stores/Drawer'

import {Drawer as BaseDrawer} from '@mantine/core'

import type {DrawerProps as BaseDrawerProps} from '@mantine/core'

export interface DrawerProps extends Omit<BaseDrawerProps, "opened" | "onClose"> {
    id: string
    children: React.ReactNode
}

export const Drawer = ({id, children, ...props}: DrawerProps) => {
    const {drawer, setDrawer} = useDrawerStore()

    return (
        <BaseDrawer 
            {...props}
            id={id}
            opened={drawer === id} 
            onClose={() => setDrawer(null)}
        >                      
            {children}
        </BaseDrawer>
    )
}

