import './style.css'

import {Accordion as BaseAccordion} from '@mantine/core'
import type {AccordionProps as BaseAccordionProps} from '@mantine/core'

interface AccordionProps extends Omit<BaseAccordionProps, "radius" | "chevronIconSize" | "variant" | "unstyled" | "vars" | "styles" | "classNames"> {
    variant: string
}

const Accordion = ({children = null, variant = 'default', ...props}: AccordionProps) => {
    return (
        <BaseAccordion 
            data-variant={variant} 
            classNames={{
                root: 'ui-accordion',
                item: 'ui-accordion-item',
                control: 'ui-accordion-control',
                chevron: 'ui-accordion-chevron',
                label: 'ui-accordion-label',
                icon: 'ui-accordion-icon',
                itemTitle: 'ui-accordion-item-title',
                panel: 'ui-accordion-panel',
                content: 'ui-accordion-body'
            }}
            {...props}
        >
            {children}
        </BaseAccordion>
    )
}

Accordion.Item = BaseAccordion.Item
Accordion.Control = BaseAccordion.Control
Accordion.Panel = BaseAccordion.Panel

export {Accordion}
export type {AccordionProps}