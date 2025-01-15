'use client'
import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from '@mui/material'

export interface Column<T> {
  id: keyof T
  label: string
  align?: 'left' | 'center' | 'right'
  sx?: React.CSSProperties
  render?: (row: T) => React.ReactNode
}

interface DynamicTableProps<T> {
  columns: Column<T>[]
  data: T[]
  rowsPerPageOptions?: number[]
}

const DynamicTable = <T,>({ columns, data, rowsPerPageOptions = [5, 10, 15] }: DynamicTableProps<T>) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [orderBy, setOrderBy] = useState<keyof T | null>(null)
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc')

  const handlePageChange = (_: unknown, newPage: number) => setPage(newPage)

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSort = (property: keyof T) => {
    const isAsc = orderBy === property && orderDirection === 'asc'

    setOrderDirection(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedData = React.useMemo(() => {
    if (!orderBy) return data

    return [...data].sort((a, b) => {
      const valA = a[orderBy]
      const valB = b[orderBy]

      if (valA < valB) return orderDirection === 'asc' ? -1 : 1
      if (valA > valB) return orderDirection === 'asc' ? 1 : -1

      return 0
    })
  }, [data, orderBy, orderDirection])

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.id as string} align={col.align || 'left'} sx={{ ...col.sx }}>
                <TableSortLabel
                  active={orderBy === col.id}
                  direction={orderBy === col.id ? orderDirection : 'asc'}
                  onClick={() => handleSort(col.id)}
                  className='whitespace-nowrap'
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map(col => (
                <TableCell key={col.id as string} align={col.align || 'left'}>
                  {col.render ? col.render(row) : (row[col.id] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </TableContainer>
  )
}

export default DynamicTable
