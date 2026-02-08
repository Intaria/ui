'use client'

import {useState} from 'react'

import {Table as BaseTable} from '@mantine/core'
import type {TableProps as BaseTableProps} from '@mantine/core'

import {Icon} from '~ui'

import './style.css'

interface TableProps extends Omit<BaseTableProps, "borderColor" | "highlightOnHoverColor" | "horizontalSpacing" | "stripedColor" | "verticalSpacing"> {}

interface TableTheadProps {
	headers?: TableTheadRowProps[][]
    sort?: string
    sortIconUp?: string
    sortIconDown?: string
    onSort?: (sort: string) => void
}

interface TableTheadRowProps {
    title?: string
    className?: string
    sortBy?: string
    sortDir?: string[]
    colSpan?: number
    rowSpan?: number
}

const Table = ({children = null, ...props}: TableProps) => {
	return (
		<BaseTable {...props}>
            {children}
        </BaseTable>
	)
}

const Thead = ({headers = [], sort = '', sortIconUp = 'icon-sort-up', sortIconDown = 'icon-sort-down', onSort = undefined, ...props}: TableTheadProps) => {
	const [sortBy, setSortBy] = useState(sort ? sort.split(':')?.[0] : null)
	const [sortDir, setSortDir] = useState(sort ? sort.split(':')?.[1] : null)

    //TODO: проверить, нужно ли:
    /*
    useEffect(() => {
        if (sort) {
            setSortBy(sort ? sort.split(':')?.[0] : null)
            setSortDir(sort ? sort.split(':')?.[1] : null)
        }
    }, [sort])
    */

    const handleSort = (row: TableTheadRowProps) => {
        if (onSort && row['sortBy'] && row['sortDir']?.length) {
			let newSortDirIndex = 0
            
            if (row['sortBy'] === sortBy) {
				let currentSortDirIndex = sortDir ? row['sortDir'].indexOf(sortDir) : 0

				if (currentSortDirIndex !== row['sortDir'].length - 1) {
					newSortDirIndex = currentSortDirIndex + 1
				} else {
					newSortDirIndex = 0
				}
			}

            onSort(row['sortBy'] + ':' + row['sortDir'][newSortDirIndex])
		}

    }
    
    return (
        <BaseTable.Thead {...props}>
            {headers.map((rowItem, rowIndex) => (
                <Table.Tr key={rowIndex}>
                    {rowItem.map((item, index) => (
                        <Table.Th 
                            key={index} onClick={() => handleSort(item)} 
                            className={item?.['className']} 
                            rowSpan={item?.['rowSpan']} 
                            colSpan={item?.['colSpan']}
                            data-sortable={item?.['sortBy'] && item?.['sortDir'] && onSort} 
                        >
                            {item?.['title'] && (
                                <>{item['title']}</>
                            )}

                            {item?.['sortBy'] && item?.['sortDir'] && (
                                <Icon name={sortDir === 'asc' ? sortIconUp : sortIconDown} className={sortBy === item['sortBy'] ? 'active' : undefined} />
                            )}
                        </Table.Th>
                    ))}
                </Table.Tr>
            ))}
        </BaseTable.Thead>
	)
}

Table.Thead = Thead
Table.Th = BaseTable.Th
Table.Tbody = BaseTable.Tbody
Table.Tr = BaseTable.Tr
Table.Td = BaseTable.Td
Table.Tfoot = BaseTable.Tfoot
Table.Caption = BaseTable.Caption
Table.ScrollContainer = BaseTable.ScrollContainer

export {Table}
export type {TableProps}