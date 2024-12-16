'use client'
import { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Chip, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'
import { formattedDate } from '@/utils/formate'
import AiSetting from '@/components/Aisetting'
import CustomSwitch from '@/@core/components/mui/Switch'

interface Props {
  id: number
  list: string
  sender: string
  amount: number
  detail: string
  status: string
  createat: Date
}

const ListDetail = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const data: Props[] = [
    {
      id: 1,
      list: 'test1',
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
      label: 'จัดการ',
      align: 'center' as const,
      render: () => (
        <div className='flex gap-2 text-nowrap justify-center'>
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
            <div>
              <Button variant='contained' color='primary'>
                <i className='tabler-plus' />
                เพิ่มรายการ
              </Button>
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
