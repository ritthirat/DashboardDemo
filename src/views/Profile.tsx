import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

const Profile = () => {
  return (
    <Card>
      <CardHeader title='โปรไฟล์' />
      <CardContent className='flex flex-col gap-4'>
        <div className='flex '>
          <Typography className='font-bold w-1/4' variant='h5'>
            ชื่อร้าน
          </Typography>
          <Typography className='w-3/4' variant='h5'>
            wrap wrap
          </Typography>
        </div>
        <div className='flex '>
          <Typography className='font-bold w-1/4' variant='h5'>
            ลิงก์รายการขอเพลง ทิป
          </Typography>
          <CustomTextField
            className='w-3/4'
            value={'http://www.google.com'}
            fullWidth
            placeholder='ลิงก์รายการขอเพลง ทิป'
          />
        </div>
        <div className='flex '>
          <Typography className='font-bold w-1/4' variant='h5'>
            ลิงก์สำหรับลูกค้า
          </Typography>
          <CustomTextField
            className='w-3/4'
            value={'https://urwarp.com/warpwarp'}
            fullWidth
            placeholder='ลิงก์สำหรับลูกค้า'
          />
        </div>
        <div className='flex flex-col justify-center gap-4 mt-4'>
          <img src='/images/qrcode.png' alt='qrcode' className='m-auto border-[15px] border-white rounded-lg' />

          <Button className='m-auto' variant='contained'>
            ดาวน์โหลด QR Code
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Profile
