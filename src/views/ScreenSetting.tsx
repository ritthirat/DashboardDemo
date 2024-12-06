import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'

interface Props {
  id: number
  name: string
  lastUpdate: string
}

const ScreenSetting = () => {
  const data: Props[] = [
    {
      id: 1,
      name: 'test',
      lastUpdate: 'test'
    },
    {
      id: 2,
      name: 'test2',
      lastUpdate: 'test2'
    }
  ]

  const columns = [
    {
      id: 'name' as keyof Props,
      label: 'ชื่อ',
      render: (data: Props) => <Typography variant='body2'>{data.name}</Typography>
    },
    {
      id: 'lastUpdate' as keyof Props,
      label: 'อัพเดทล่าสุด',
      render: (data: Props) => <Typography variant='body2'>{data.lastUpdate}</Typography>
    },
    {
      id: 'action' as keyof Props,
      label: 'จัดการ',
      align: 'center' as const,
      sx: { width: 500 },
      render: () => (
        <div className='flex  gap-2 justify-center text-nowrap'>
          <Button
            startIcon={<i className='tabler-pencil' />}
            variant='outlined'
            size='small'
            className='rounded-xl'
            color='info'
          >
            แก้ไข
          </Button>
          <Button
            startIcon={<i className='tabler-copy-plus' />}
            variant='outlined'
            size='small'
            className='rounded-xl'
            color='warning'
          >
            ทำซ้ำ
          </Button>
          <Button
            startIcon={<i className='tabler-copy' />}
            variant='outlined'
            size='small'
            className='rounded-xl'
            color='success'
          >
            คัดลอกลิงก์
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
    <Card>
      <CardHeader
        title='ปรับแต่งหน้าจอ'
        action={
          <div className='flex gap-2'>
            <Button variant='contained' color='primary'>
              เพิ่มวิดเจ็ต
            </Button>
            <Button variant='contained' color='primary'>
              สร้างจากรูปแบบมาตรฐาน
            </Button>
          </div>
        }
      />
      <CardContent>
        <DynamicTable data={data} columns={columns} />
      </CardContent>
    </Card>
  )
}

export default ScreenSetting
