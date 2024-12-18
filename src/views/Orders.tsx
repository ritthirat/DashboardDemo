import { Card, CardContent, CardHeader, Typography } from '@mui/material'

import DynamicTable from '@/components/table/DyamicTable'
import { formattedDateTime } from '@/utils/formate'

interface DataProps {
  id: number
  name: string
  time: number
  amont: number
  date: Date
}

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

  return (
    <Card>
      <CardHeader title='คำสั่งซื้อ' />
      <CardContent>
        <DynamicTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default Orders
