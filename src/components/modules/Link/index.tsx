'use client'

//TODO: move component outer or make it independed from next.js

import {forwardRef} from 'react'
import {useRouter} from 'next/navigation'

import type {AnchorHTMLAttributes} from 'react'

import './style.css'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string
	children?: React.ReactNode
	prefetch?: boolean
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({href = '', children = null, prefetch = true, onClick = null, ...props}, ref) => {
	const router = useRouter()

	async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault()
		e.stopPropagation()

		if (router) {
			if (prefetch) {
				//router.prefetch(href)
			}

			await router.push(href)

			if (onClick) {
				onClick(e)
			}
		}
	}

	return (
		<a href={href} onClick={handleClick} ref={ref} {...props}>
			{children}
		</a>
	)
})

export {Link}
export type {LinkProps}