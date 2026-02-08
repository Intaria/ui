import {forwardRef} from 'react'
import type {ComponentProps} from 'react'

import './style.css'

interface IconProps extends ComponentProps<'svg'> {
	ariaHidden?: boolean
	children?: React.ReactNode
	name?: string
}

const Icon = forwardRef(
	({name = '', children = null, ariaHidden = true, focusable = false, role = 'img', ...props}: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
		return (
			<svg ref={ref} aria-hidden={ariaHidden} focusable={focusable} role={role} {...props}>
				{children ? children : (name.length > 0 ? <use xlinkHref={name} /> : '')}
			</svg>
		)
	}
)

export {Icon}
export type {IconProps}