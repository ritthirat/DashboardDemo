'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import type { ChildrenType } from '@/@core/types'

const DateTimeProvider = ({ children }: ChildrenType) => {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
}

export default DateTimeProvider
