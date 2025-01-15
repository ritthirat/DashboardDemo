'use client'
import { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Chip, Typography } from '@mui/material'

import { historylist } from '@/data/mock/dashboardData'
import type { HistoryList } from '@/data/mock/dashboardData'

import HistoryDetailModal from '@/components/HistoryDetailModal'
import { formattedDate } from '@/utils/formate'
import DynamicTable from '@/components/table/DyamicTable'

const History = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const columns = [
    {
      id: 'date' as keyof HistoryList,
      header: 'วันที่',
      label: 'วันที่',
      render: (data: HistoryList) => <Typography variant='body2'>{formattedDate(data.date)}</Typography>
    },
    {
      id: 'status' as keyof HistoryList,
      label: 'สถานะ',
      align: 'center' as const,
      render: (data: HistoryList) => (
        <div className=' flex flex-col items-center'>
          <Chip
            size='small'
            label={data.status}
            className='rounded-2xl'
            color={data.status === 'success' ? 'success' : data.status === 'pending' ? 'warning' : 'error'}
          />
          <Typography className='text-xs' color={'gray'}>
            {formattedDate(data.date)}
          </Typography>
        </div>
      )
    },
    {
      id: 'createDate' as keyof HistoryList,
      label: 'สร้างเมื่อ',
      align: 'center' as const,
      render: (data: HistoryList) => <Typography variant='body2'>{formattedDate(data.createDate)}</Typography>
    },
    {
      id: 'actions' as keyof HistoryList,
      label: '',
      align: 'center' as const,
      sx: { width: '500px' },
      render: () => (
        <div className='flex justify-end gap-2 text-nowrap'>
          <Button variant='outlined' size='small' color='primary' className='rounded-2xl' onClick={toggleModal}>
            ดูรายงาน
          </Button>
          <Button variant='outlined' size='small' color='success' className='rounded-2xl'>
            ดาวโหลดรายงาน
          </Button>
          <Button variant='outlined' size='small' color='info' className='rounded-2xl'>
            สลิปโอนเงิน
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <Card>
        <CardHeader title='History' />
        <CardContent>
          <DynamicTable columns={columns} data={historylist} />
        </CardContent>
      </Card>
      <HistoryDetailModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default History
