import { useState } from 'react'

import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'
import CustomTextField from '@/@core/components/mui/TextField'

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

const MessageModal = ({ isOpen, toggleModal }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = ['แคปชั่น 1', 'แคปชั่น 2', 'แคปชั่น 3']

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <DynamicModal isOpen={isOpen} toggleModal={toggleModal} title='เพิ่มข้อมความ' onSubmit={() => {}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <div className='flex flex-col gap-2'>
            <CustomTextField autoFocus fullWidth placeholder='เพิ่มข้อความ' />
            <CustomTextField fullWidth placeholder='รายละเอียด' />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className='my-4 '>
          <Typography variant='h5'>หมวดหมู่ข้อความ</Typography>

          <Card>
            <CardContent className='flex flex-col items-center gap-2'>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'contained' : 'text'}
                  sx={{
                    color: activeCategory === category ? 'primary' : 'default'
                  }}
                  onClick={() => handleCategoryClick(category)}
                  className='w-full rounded-full'
                >
                  {category}
                </Button>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <div className='flex'>
            <CustomTextField fullWidth placeholder='เพิ่มหมวดหมู่' />

            <Button variant='contained' className=''>
              บันทึก
            </Button>
          </div>

          <Typography variant='h6' className='mt-4'>
            แก้ไขชื่อหมวดหมู่
          </Typography>
          <div className='flex'>
            <CustomTextField autoFocus fullWidth placeholder='เพิ่มข้อความ' />

            <Avatar
              variant='rounded'
              className='bg-transparent text-error hover:bg-gray-200'
              sx={{ width: 38, height: 38 }}
            >
              <i className='tabler-trash' />
            </Avatar>
          </div>
          <Typography variant='h6' className='mt-4'>
            เพิ่มข้อความใหม่
          </Typography>
          <div className='flex'>
            <CustomTextField autoFocus fullWidth placeholder='เพิ่มข้อความ' />

            <Button variant='contained' className='text-nowrap' color='primary'>
              เพิ่มข้อความ
            </Button>
          </div>
          <Typography variant='h5' className='mt-4 '>
            ข้อความทั้งหมด
          </Typography>
          <Card>
            <CardContent className='flex flex-col gap-2'>
              <div className='flex'>
                <Typography
                  variant='body1'
                  className='p-2 bg-[rgb(var(--mui-palette-background-defaultChannel))] rounded-lg w-full'
                >
                  แมวเล้า
                </Typography>
                <Avatar
                  variant='rounded'
                  className='bg-transparent text-error hover:bg-gray-200'
                  sx={{ width: 38, height: 38 }}
                >
                  <i className='tabler-trash' />
                </Avatar>
              </div>
              <div className='flex'>
                <Typography
                  variant='body1'
                  className='p-2 bg-[rgb(var(--mui-palette-background-defaultChannel))] rounded-lg w-full'
                >
                  แมวเล้า
                </Typography>
                <Avatar
                  variant='rounded'
                  className='bg-transparent text-error hover:bg-gray-200'
                  sx={{ width: 38, height: 38 }}
                >
                  <i className='tabler-trash' />
                </Avatar>
              </div>
              <div className='flex'>
                <Typography
                  variant='body1'
                  className='p-2 bg-[rgb(var(--mui-palette-background-defaultChannel))] rounded-lg w-full'
                >
                  แมวเล้า
                </Typography>
                <Avatar
                  variant='rounded'
                  className='bg-transparent text-error hover:bg-gray-200'
                  sx={{ width: 38, height: 38 }}
                >
                  <i className='tabler-trash' />
                </Avatar>
              </div>
              <div className='flex'>
                <Typography
                  variant='body1'
                  className='p-2 bg-[rgb(var(--mui-palette-background-defaultChannel))] rounded-lg w-full'
                >
                  แมวเล้า
                </Typography>
                <Avatar
                  variant='rounded'
                  className='bg-transparent text-error hover:bg-gray-200'
                  sx={{ width: 38, height: 38 }}
                >
                  <i className='tabler-trash' />
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DynamicModal>
  )
}

export default MessageModal
