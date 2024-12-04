'use client'
import { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Chip, Typography } from '@mui/material'

import { historylist } from '@/data/mock/dashboardData'
import type { HistoryList } from '@/data/mock/dashboardData'

import HistoryDetailModal from '@/components/็HistoryDetailModal'
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
      label: 'วันที่',
      render: (data: HistoryList) => <Typography variant='body2'>{formattedDate(data.date)}</Typography>
    },
    {
      id: 'status' as keyof HistoryList,
      label: 'สถานะ',
      align: 'center' as const,
      render: (data: HistoryList) => (
        <Chip
          size='small'
          label={data.status}
          color={data.status === 'success' ? 'success' : data.status === 'pending' ? 'warning' : 'error'}
        />
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
      label: 'จัดการ',
      align: 'center' as const,
      sx: { width: '500px' },
      render: () => (
        <div className='flex justify-center gap-2 text-nowrap'>
          <Button variant='outlined' size='small' color='primary' onClick={toggleModal}>
            ดูรายงาน
          </Button>
          <Button variant='outlined' size='small' color='primary'>
            ดาวโหลดรายงาน
          </Button>
          <Button variant='outlined' size='small' color='primary'>
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
