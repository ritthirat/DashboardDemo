'use client'
import { useState } from 'react'

import { Button, Card, CardContent, CardHeader, Switch, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'
import DonateSettingModal from '@/components/DonateSettingModal'

interface SettingData {
  id: number
  name: string
  catogory: string
  status: boolean
  lastUpdate: string
}

const DonateSetting = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const data: SettingData[] = [
    {
      id: 1,
      name: 'test',
      catogory: 'test',
      status: true,
      lastUpdate: 'test'
    },
    {
      id: 2,
      name: 'test2',
      catogory: 'test2',
      status: false,
      lastUpdate: 'test2'
    }
  ]

  const [isData, setData] = useState(data) // [data, setData]

  const switchHandler = (id: number) => {
    setData(prevData => prevData.map(item => (item.id === id ? { ...item, status: !item.status } : item)))
  }

  const columns = [
    {
      id: 'id' as keyof SettingData,
      label: 'ลําดับ',
      reder: (data: SettingData) => <Typography variant='body2'>{data.id}</Typography>
    },
    {
      id: 'name' as keyof SettingData,
      label: 'ชื่อ',
      render: (data: SettingData) => <Typography variant='body2'>{data.name}</Typography>
    },
    {
      id: 'catogory' as keyof SettingData,
      label: 'ประเภทโดเนท',
      render: (data: SettingData) => <Typography variant='body2'>{data.catogory}</Typography>
    },
    {
      id: 'status' as keyof SettingData,
      label: 'สถานะ',
      render: (data: SettingData) => (
        <Switch
          checked={data.status}
          color='success'
          onChange={() => switchHandler(data.id)}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            '& .MuiSwitch-track': {
              backgroundColor: data.status ? 'success.main' : 'error.main'
            }
          }}
        />
      )
    },
    {
      id: 'lastUpdate' as keyof SettingData,
      label: 'อัพเดทล่าสุด',
      render: (data: SettingData) => <Typography variant='body2'>{data.lastUpdate}</Typography>
    },
    {
      id: 'actions' as keyof SettingData,
      label: 'จัดการ',
      align: 'center' as const,
      sx: { width: '250px' },
      render: () => (
        <div className='flex justify-center gap-2'>
          <Button variant='outlined' size='small' color='info' className='rounded-xl'>
            แก้ไข
          </Button>
          <Button variant='outlined' size='small' className='rounded-xl' color='error'>
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
          title='โดเนท'
          action={
            <Button variant='contained' color='primary' onClick={toggleModal}>
              เพิ่มข้อความ
            </Button>
          }
        />
        <CardContent>
          <DynamicTable columns={columns} data={isData} />
        </CardContent>
      </Card>
      <DonateSettingModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default DonateSetting
