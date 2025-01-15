/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { forwardRef, SyntheticEvent, useState } from 'react'

import type { SelectChangeEvent, TextFieldProps } from '@mui/material'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material'

import { DatePicker } from '@mui/x-date-pickers'

import { formatDate } from 'date-fns/format'

import DynamicTable from '@/components/table/DyamicTable'
import { formattedDate } from '@/utils/formate'
import AiSetting from '@/components/Aisetting'
import CustomSwitch from '@/@core/components/mui/Switch'
import CustomTextField from '@/@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

interface Props {
  id: number
  list: string
  sender: string
  amount: number
  detail: string
  status: string
  createat: Date
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

const ListDetail = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const data: Props[] = [
    {
      id: 1,
      list: 'test21',
      sender: 'test',
      amount: 100,
      detail: 'test',
      status: 'success',
      createat: new Date()
    },
    {
      id: 2,
      list: 'test1',
      sender: 'test1',
      amount: 99,
      detail: 'test1',
      status: 'panding',
      createat: new Date()
    }
  ]

  const columns = [
    {
      id: 'list' as keyof Props,
      label: 'รายการ',
      render: (data: Props) => (
        <div>
          <Typography variant='h5'>{data.list}</Typography>
          <Typography variant='body2'>{data.amount} บาท</Typography>
        </div>
      )
    },
    {
      id: 'sender' as keyof Props,
      label: 'ผู้ส่ง',
      render: (data: Props) => <Typography variant='body2'>{data.sender}</Typography>
    },
    {
      id: 'detail' as keyof Props,
      label: 'ข้อมูล',
      render: (data: Props) => <Typography variant='body2'>{data.detail}</Typography>
    },
    {
      id: 'status' as keyof Props,
      label: 'สถานะ',
      align: 'center' as const,
      render: (data: Props) => (
        <Chip
          size='small'
          label={data.status}
          color={data.status === 'success' ? 'success' : data.status === 'pending' ? 'warning' : 'error'}
        />
      )
    },
    {
      id: 'createat' as keyof Props,
      label: 'สร้างเมื่อ',
      align: 'center' as const,
      render: (data: Props) => <Typography variant='body2'>{formattedDate(data.createat)}</Typography>
    },
    {
      id: 'action' as keyof Props,
      label: '',
      align: 'center' as const,
      render: () => (
        <div className='flex gap-2 text-nowrap justify-end'>
          <Button variant='outlined' size='small' color='success' className='rounded-xl'>
            <i className='tabler-eye' />
          </Button>

          <Button
            startIcon={<i className='tabler-player-play-filled' />}
            variant='contained'
            size='small'
            className='rounded-xl'
            color='primary'
          >
            เล่นซ่ำ
          </Button>
        </div>
      )
    }
  ]

  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  const [startDate, setStartDate] = useState<Date | undefined | null>(null)
  const [endDate, setEndDate] = useState<Date | undefined | null>(null)

  const handleDateChange = (dates: [Date | null, Date | null], event: SyntheticEvent<any, Event> | undefined) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div>
      <Card>
        <CardHeader title='รายการโดเนท' />
        <CardContent>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <CustomSwitch defaultChecked />

              <Typography variant='h5'>ใช้งาน Ai อนุมัติรายการ</Typography>
              <i onClick={toggleModal} className='tabler-settings cursor-pointer' />
            </div>
            <div className='flex gap-2 '>
              <Box sx={{ minWidth: 100 }}>
                <CustomTextField select label='สถานะ' defaultValue={'all'}>
                  <MenuItem value='all'>ทั้งหมด</MenuItem>
                  <MenuItem value='In Stock'>รออนุมัติ</MenuItem>
                </CustomTextField>
              </Box>
              <div className='flex items-center gap-2'>
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
              </div>
              <Box sx={{ minWidth: 120 }}>
                <CustomTextField select label='เรียงตาม' defaultValue={'new'}>
                  <MenuItem value='new'>ล่าสุด</MenuItem>
                  <MenuItem value='In Stock'>เก่าสุด</MenuItem>
                </CustomTextField>
              </Box>
            </div>
          </div>
          <Typography variant='body1'>
            ไม่มีค่าบริการในการใช้ AI สามารถใช้เป็นตัวช่วยในการอนุมัติรูปภาพและวีดีโอได้ฟรี
          </Typography>
          <DynamicTable columns={columns} data={data} />
        </CardContent>
      </Card>
      <AiSetting isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default ListDetail
