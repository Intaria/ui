import './style.css'

import {Modal as BaseModal} from '@mantine/core'

import type {ModalProps as BaseModalProps} from '@mantine/core'

export interface ModalProps extends BaseModalProps {
    children: React.ReactNode
}

export const Modal = ({children, ...props}: ModalProps) => {
    return (
        <>
            <BaseModal
                {...props}
            >                      
                {children}
            </BaseModal>
        </>
    )
}

