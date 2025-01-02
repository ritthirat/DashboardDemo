'use client'
import { useEffect, useState } from 'react'

import { Button, Card, CardContent, CardHeader, Switch, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import type { Column } from '@/components/table/DyamicTable'
import DynamicTable from '@/components/table/DyamicTable'
import DonateSettingModal from '@/components/DonateSettingModal'
import { getProductsList } from '@/store/actions/productsAction'
import type { RootState } from '@/store'
import type { ProductList } from '@/types/productsType'

const DonateSetting = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    getProductsList(dispatch)
  }, [dispatch])

  const productList = useSelector((state: RootState) => state.products.productList)

  console.log(productList)

  const columns: Column<ProductList[number]>[] = [
    {
      id: 'order_index',
      label: 'ลําดับ',
      render: data => <Typography variant='body2'>{data.order_index}</Typography>
    },
    {
      id: 'name',
      label: 'ชื่อ',
      render: data => <Typography variant='body2'>{data.name}</Typography>
    },
    {
      id: 'type',
      label: 'ประเภทโดเนท',
      render: data => <Typography variant='body2'>{data.type}</Typography>
    },
    {
      id: 'description',
      label: 'คําอธิบาย',
      render: data => <Typography variant='body2'>{data.description}</Typography>
    },
    {
      id: 'enabled',
      label: 'สถานะ',
      render: data => (
        <Switch
          checked={data.enabled}
          color='success'
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            '& .MuiSwitch-track': {
              backgroundColor: data.enabled ? 'success.main' : 'error.main'
            }
          }}
        />
      )
    },
    {
      id: 'updatedAt',
      label: 'อัพเดทล่าสุด',
      render: data => <Typography variant='body2'>{data.updatedAt}</Typography>
    },
    {
      id: 'actions' as keyof ProductList[number],
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
          <DynamicTable columns={columns} data={productList} />
        </CardContent>
      </Card>
      <DonateSettingModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default DonateSetting
