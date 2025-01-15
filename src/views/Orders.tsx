'use client'
import type { SyntheticEvent } from 'react'
import { forwardRef, useState } from 'react'

import { Card, CardContent, CardHeader, MenuItem, Typography } from '@mui/material'
import type { TextFieldProps } from '@mui/material'

import { formatDate } from 'date-fns/format'

import DynamicTable from '@/components/table/DyamicTable'
import { formattedDateTime } from '@/utils/formate'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@/@core/components/mui/TextField'

interface DataProps {
  id: number
  name: string
  time: number
  amont: number
  date: Date
}

type CustomInputProps = TextFieldProps & {
  label?: string
  end: Date | number
  start: Date | number
}

const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  // Vars
  const startDate = props.start !== null ? formatDate(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${formatDate(props.end, 'MM/dd/yyyy')}` : null
  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <CustomTextField fullWidth inputRef={ref} label={props.label || ''} {...props} value={value} />
})

const Orders = () => {
  const data: DataProps[] = [
    {
      id: 1,
      name: 'test',
      time: 40,
      amont: 100,
      date: new Date()
    },
    {
      id: 2,
      name: 'test2',
      time: 50,
      amont: 200,
      date: new Date()
    }
  ]

  const columns = [
    {
      id: 'name' as keyof DataProps,
      label: 'ชื่อ',
      render: (data: DataProps) => (
        <div>
          <Typography className='font-bold' variant='body1'>
            {data.name}
          </Typography>
          <Typography variant='body2'>{data.time} วิ</Typography>
        </div>
      )
    },
    {
      id: 'amont' as keyof DataProps,
      label: 'จํานวนเงิน (บาท)',
      render: (data: DataProps) => <Typography variant='body2'>{data.amont}</Typography>
    },
    {
      id: 'date' as keyof DataProps,
      label: 'วันที่จ่าย',
      render: (data: DataProps) => <Typography variant='body2'>{formattedDateTime(data.date)}</Typography>
    }
  ]

  const [startDate, setStartDate] = useState<Date | undefined | null>(null)
  const [endDate, setEndDate] = useState<Date | undefined | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDateChange = (dates: [Date | null, Date | null], event: SyntheticEvent<any, Event> | undefined) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Card>
      <CardHeader title='คำสั่งซื้อ' />
      <CardContent>
        <div className='flex justify-between'>
          <div></div>
          <div className='flex gap-2'>
            <AppReactDatepicker
              selectsRange
              endDate={endDate as Date}
              selected={startDate}
              startDate={startDate as Date}
              id='date-range-picker'
              onChange={handleDateChange}
              shouldCloseOnSelect={false}
              customInput={
                <CustomInput label='ระยะเวลา' start={startDate as Date | number} end={endDate as Date | number} />
              }
            />
            <CustomTextField select label='เลือกการโดเนท' defaultValue={'all'}>
              <MenuItem value='all'> ทั้งหมด</MenuItem>
              <MenuItem value='a'> ของเพลง</MenuItem>
              <MenuItem value='s'> ทั้งหมด</MenuItem>
              <MenuItem value='z'> ทั้งหมด</MenuItem>
            </CustomTextField>
          </div>
        </div>
        <DynamicTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default Orders
