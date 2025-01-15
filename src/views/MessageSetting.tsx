'use client'
import { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'
import MessageModal from '@/components/MessageModal'

interface SettingData {
  id: number
  name: string
  description: string
  lastUpdate: string
}

const MessageSetting = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const data: SettingData[] = [
    {
      id: 1,
      name: 'test',
      description: 'test',
      lastUpdate: 'test'
    },
    {
      id: 2,
      name: 'test',
      description: 'test',
      lastUpdate: 'test'
    }
  ]

  const columns = [
    {
      id: 'name' as keyof SettingData,
      label: 'ชื่อ',
      render: (data: SettingData) => <Typography variant='body2'>{data.name}</Typography>
    },
    {
      id: 'description' as keyof SettingData,
      label: 'รายละเอียด',
      render: (data: SettingData) => <Typography variant='body2'>{data.description}</Typography>
    },
    {
      id: 'lastUpdate' as keyof SettingData,
      label: 'อัพเดทล่าสุด',
      render: (data: SettingData) => <Typography variant='body2'>{data.lastUpdate}</Typography>
    },
    {
      id: 'actions' as keyof SettingData,
      label: '',
      align: 'center' as const,
      sx: { width: '250px' },
      render: () => (
        <div className='flex justify-end gap-2'>
          <Button
            startIcon={<i className='tabler-pencil' />}
            variant='outlined'
            size='small'
            color='info'
            className='rounded-xl'
            onClick={toggleModal}
          >
            แก้ไข
          </Button>
          <Button
            startIcon={<i className='tabler-trash' />}
            variant='outlined'
            size='small'
            className='rounded-xl'
            color='error'
          >
            ลบ
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <Card>
        <CardHeader
          title='ข้อความ'
          action={
            <Button variant='contained' color='primary' onClick={toggleModal}>
              เพิ่มข้อความ
            </Button>
          }
        />
        <CardContent>
          <DynamicTable columns={columns} data={data} />
        </CardContent>
      </Card>
      <MessageModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default MessageSetting
