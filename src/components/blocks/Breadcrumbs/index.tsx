import {createElement} from 'react'
import {Breadcrumbs as BaseBreadcrumbs} from '@mantine/core'
import type {BreadcrumbsProps as BaseBreadcrumbsProps} from '@mantine/core'

import {Link} from '~ui/components'

import './style.css'

interface BreadcrumbsProps extends Omit<BaseBreadcrumbsProps, "separatorMargin" | "children"> {
    items?: {
        title: string,
        href?: string
    }[]
    children?: React.ReactNode
}

const Breadcrumbs = ({children = null, items, separator = '/', ...props}: BreadcrumbsProps) => {
	return (
		<nav itemScope itemType="http://data-vocabulary.org/Breadcrumb">
            <BaseBreadcrumbs separator={separator} {...props}>
                {items ? (items.map((item, index) => createElement(
                    item['href'] ? Link : 'span', {
                        key: index,
                        ...(item['href'] && {
                            'href': item['href'],
                        })
                    },
                    (item['title']),
                ))) : children}
            </BaseBreadcrumbs>
        </nav>
	)
}

export {Breadcrumbs}
export type {BreadcrumbsProps}