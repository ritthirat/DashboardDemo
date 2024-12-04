import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'

interface SettingData {
  id: number
  name: string
  description: string
  lastUpdate: string
}

const Setting = () => {
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
      runder: (data: SettingData) => <Typography variant='body2'>{data.name}</Typography>
    },
    {
      id: 'description' as keyof SettingData,
      label: 'รายละเอียด',
      runder: (data: SettingData) => <Typography variant='body2'>{data.description}</Typography>
    },
    {
      id: 'lastUpdate' as keyof SettingData,
      label: 'อัพเดทล่าสุด',
      runder: (data: SettingData) => <Typography variant='body2'>{data.lastUpdate}</Typography>
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
    <Card>
      <CardHeader
        title='ข้อความ'
        action={
          <Button variant='contained' color='warning'>
            เพิ่มข้อความ
          </Button>
        }
      />
      <CardContent>
        <DynamicTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default Setting
