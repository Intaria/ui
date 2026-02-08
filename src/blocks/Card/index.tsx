import {createElement} from 'react'

import './style.css'

const Card = ({className = '', component = 'div', children = null, ...props}: {
	className?: string
    //TODO:
    component?: string
    children?: React.ReactNode
}) => {
	return (
        createElement(
            component, { 
                className: "ui-card" + (className && (' ' + className)),
                ...props
            },
            (children)
        )
	)
}

const Section = ({className = '', component = 'div', withoutPadding = false, children = null, ...props}: {
	className?: string
    component?: string
    withoutPadding?: boolean
    children?: React.ReactNode
}) => {
	return (
        createElement(
            component, { 
                className: "ui-card-section" + (className && (' ' + className)),
                ...(withoutPadding && {
                    'data-without-border': true,
                }),
                ...props
            },
            (children)
        )
	)
}
Card.Section = Section

export {Card}