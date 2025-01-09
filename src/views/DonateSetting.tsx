'use client'
import { useEffect, useState } from 'react'

import { Button, Card, CardContent, CardHeader, Switch, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import type { Column } from '@/components/table/DyamicTable'
import DynamicTable from '@/components/table/DyamicTable'
import DonateSettingModal from '@/components/DonateSettingModal'
import { deleteProduct, getProductsList, getUpdateProduct } from '@/store/actions/productsAction'
import type { RootState } from '@/store'
import type { Product, ProductList } from '@/types/productsType'
import { setProduct } from '@/store/slices/produtsSlice'

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

  const handleDelete = async (id: string) => {
    try {
      deleteProduct(dispatch, id)
      toast.success('ลบสําเร็จ')
    } catch (error) {
      console.log(error)
    }
  }

  const [edit, setEdit] = useState<Product | null>(null)

  const handleEdit = async (data: Product) => {
    setEdit(data)
    setProduct(data)
    toggleModal()
  }

  useEffect(() => {
    if (!isOpen) {
      setEdit(null)
    }
  }, [isOpen])

  const editActive = (id: string, data: Product) => {
    try {
      getUpdateProduct(dispatch, id, data)
      setEdit(data)
    } catch (error) {
      console.log(error)
    }
  }

  const columns: Column<ProductList[number]>[] = [
    {
      id: 'order_index',
      label: 'ลําดับ',
      render: data => <Typography variant='body2'>{data.order_index}</Typography>
    },
    {
      id: 'name',
      label: 'ชื่อ',
      render: data => (
        <div className='flex items-center gap-2'>
          <img src={data.thumbnail || ''} alt='thumbnail' width={50} height={50} />{' '}
          <Typography variant='body2'>{data.name}</Typography>
        </div>
      )
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
          onChange={() => editActive(data.id, { ...data, enabled: !data.enabled })}
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
      render: data => (
        <div className='flex justify-center gap-2'>
          <Button variant='outlined' size='small' color='info' className='rounded-xl' onClick={() => handleEdit(data)}>
            แก้ไข
          </Button>
          <Button
            variant='outlined'
            size='small'
            className='rounded-xl'
            color='error'
            onClick={() => handleDelete(data.id)}
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
      <DonateSettingModal data={edit} isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default DonateSetting
