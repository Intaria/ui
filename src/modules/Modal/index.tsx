import './style.css'

import {useModalStore} from '~stores/Modal'

import {Modal as BaseModal} from '@mantine/core'

import type {ModalProps as BaseModalProps} from '@mantine/core'

export interface ModalProps extends Omit<BaseModalProps, "opened" | "onClose"> {
    id: string
    children: React.ReactNode
}

export const Modal = ({id, children, ...props}: ModalProps) => {
    const {modal, setModal} = useModalStore()

    return (
        <>
            <BaseModal
                {...props}
                id={id}
                opened={modal === id} 
                onClose={() => setModal(null)}
            >                      
                {children}
            </BaseModal>
        </>
    )
}

