import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface Column<T> {
  id: keyof T
  label: string
  align?: 'left' | 'center' | 'right'
  sx?: React.CSSProperties
  render?: (row: T) => React.ReactNode
}

interface DynamicTableProps<T> {
  columns: Column<T>[]
  data: T[]
}

const DynamicTable = <T,>({ columns, data }: DynamicTableProps<T>) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.id as string} align={col.align || 'left'} sx={{ ...col.sx }} className='text-nowrap'>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
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
    </TableContainer>
  )
}

export default DynamicTable
