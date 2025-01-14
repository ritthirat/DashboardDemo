// MUI Imports
'use client'
import { useState } from 'react'

import { Button, Grid, Menu, MenuItem } from '@mui/material'

import { DatePicker } from '@mui/x-date-pickers'

import LineAreaDailySalesChart from '@/components/statistics/LineAreaDailySalesChart'
import CardStatsVertical from '@/components/statistics/card-statistics/Vertical'
import ApexColumnChart from '@/components/apex/ApexColumnChart'
import CardStatsLineAreaCharts from '@/components/statistics/CardStatsLineAreaCharts'
import type { CardStatsWithAreaChartProps } from '@/types/widgetTypes'
import ApexLineChart from '@/components/apex/ApexLineChart'

const Statistics = () => {
  const [report, setReport] = useState('วันนี้')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const reportChange = (value: string) => {
    setReport(value)
    setAnchorEl(null)
  }

  const reportData = [
    { value: 'วันนี้', label: 'วันนี้' },
    { value: '7 วันล่าสุด', label: '7 วันล่าสุด' },
    { value: '30 วันล่าสุด', label: '30 วันล่าสุด' },
    { value: 'กำหนดเอง', label: 'กำหนดเอง' }
  ]

  const statsWithAreaChart: CardStatsWithAreaChartProps[] = [
    {
      title: 'รายได้ร้าน',
      stats: '92.6 บาท',
      chartColor: 'primary',
      avatarSize: 42,
      avatarColor: 'primary',
      avatarIcon: 'tabler-users',
      avatarSkin: 'light',
      chartSeries: [{ data: [40, 4, 58, 12, 35, 10, 84] }]
    },
    {
      title: 'ยอดขายต่ำสุด',
      stats: '36.5 บาท',
      avatarSize: 42,
      avatarColor: 'error',
      avatarIcon: 'tabler-shopping-cart',
      avatarSkin: 'light',
      chartColor: 'error',
      chartSeries: [{ data: [44, 75, 24, 57, 6, 84] }]
    },
    {
      title: 'ยอดขายสูงสุด',
      stats: '97.5 บาท',
      avatarSize: 42,
      avatarColor: 'warning',
      avatarIcon: 'tabler-box',
      avatarSkin: 'light',
      chartColor: 'warning',
      chartSeries: [{ data: [30, 84, 11, 76, 0, 49, 9] }]
    },
    {
      title: 'รายการ',
      stats: '91.8 บาท',
      avatarSize: 42,
      avatarColor: 'success',
      avatarIcon: 'tabler-credit-card',
      avatarSkin: 'light',
      chartColor: 'success',
      chartSeries: [{ data: [6, 35, 25, 61, 32, 84, 70] }]
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-end gap-2 '>
        <div className='flex flex-col gap-2 md:flex-row'>
          <div className='flex items-center gap-2'>
            <DatePicker label='เริ่มต้น' />
            <div className='flex items-center justify-center'> - </div>
            <DatePicker label='สิ้นสุด' />
          </div>
          <div className='flex items-center gap-2 m-0 md:m-3 justify-end'>
            <Button
              className='w-1/3 md:w-[150px]  '
              variant='contained'
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {report}
            </Button>
          </div>
        </div>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          {reportData.map(item => (
            <MenuItem key={item.value} onClick={() => reportChange(item.label)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Grid item xs={12} md={12} lg={12}>
          <LineAreaDailySalesChart />
        </Grid>
        <div className='flex gap-2 mt-2'>
          <Grid item xs={6} md={6} lg={6}>
            <CardStatsVertical
              title='สัปดาห์ที่แล้ว'
              subtitle='Last Week'
              stats='1.28k'
              avatarColor='error'
              avatarIcon='tabler-credit-card'
              avatarSkin='light'
              avatarSize={44}
              chipText='-12.2%'
              chipColor='error'
              chipVariant='tonal'
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <CardStatsVertical
              title='สัปดาห์นี้'
              subtitle='This week'
              stats='24.67k'
              avatarColor='success'
              avatarIcon='tabler-currency-dollar'
              avatarSkin='light'
              avatarSize={44}
              chipText='+24.67%'
              chipColor='success'
              chipVariant='tonal'
            />
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={8} lg={8}>
        <ApexColumnChart />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <CardStatsLineAreaCharts data={statsWithAreaChart} />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <ApexLineChart />
      </Grid>
      {/* <Grid item xs={12} md={4} lg={4}>
        <Typography variant='h4'>รายงายลูกค้า</Typography>
        <Card>
          <CardContent>
            <div className='flex justify-between'>
              <div>
                <Typography variant='h5' className='font-medium'>
                  24 ชั่วโมงล่าสุด
                </Typography>
                <Typography variant='h4' className='font-medium mt-6 text-primary'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium'>
                  คน
                </Typography>
              </div>
              <div className='relative pb-0 pr-0 -mb-8 ml-6 '>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='my-4 bg-green-600 rounded-md p-1 text-center'>
          <Typography variant='h6' color={'white'}>
            +100% จากสัปดาห์ที่แล้ว
          </Typography>
        </div>
        <div className='flex w-full gap-4'>
          <Card className='w-1/2'>
            <CardContent className='flex flex-col items-center justify-center'>
              <Avatar variant='rounded' className='bg-orange-600/10 text-orange-600' sx={{ width: 44, height: 44 }}>
                <i className='tabler-rotate-clockwise' />
              </Avatar>
              <Typography variant='h5'>สัปดาห์ที่แล้ว </Typography>
              <Typography variant='h5'>331 คน </Typography>
            </CardContent>
          </Card>
          <Card className='w-1/2'>
            <CardContent className='flex flex-col items-center justify-center'>
              <Avatar variant='rounded' className='bg-green-600/10 text-green-600' sx={{ width: 44, height: 44 }}>
                <i className='tabler-clock-hour-4' />
              </Avatar>
              <Typography variant='h5'>สัปดาห์ที่แล้ว </Typography>
              <Typography variant='h5'>331 คน </Typography>
            </CardContent>
          </Card>
        </div>
      </Grid> */}

      {/* <Grid item xs={12} className='flex justify-end gap-2'>
        <Button variant='outlined'>
          <Typography variant='h5'>1 วันล่าสุด</Typography>
        </Button>
        <Button variant='outlined'>
          <Typography variant='h5'>7 วันล่าสุด</Typography>
        </Button>
        <Button variant='outlined'>
          <Typography variant='h5'>30 วันล่าสุด </Typography>
        </Button>
        <Button variant='outlined'>
          <Typography variant='h5'>กำหนดเอง </Typography>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <div className='flex justify-between'>
              <div>
                <Typography variant='h5' className='font-medium'>
                  รายได้ของร้าน
                </Typography>
                <Typography variant='h4' className='font-medium mt-6 text-primary'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium'>
                  บาท
                </Typography>
              </div>
              <div className='relative pb-0 -mb-8 ml-6 pr-0'>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <div className='flex justify-between'>
              <div>
                <Typography variant='h5' className='font-medium'>
                  รายได้ของร้าน
                </Typography>
                <Typography variant='h4' className='font-medium mt-6 text-primary'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium'>
                  บาท
                </Typography>
              </div>
              <div className='relative pb-0 -mb-8 ml-6  pr-0'>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <div className='flex justify-between'>
              <div>
                <Typography variant='h5' className='font-medium'>
                  รายได้ของร้าน
                </Typography>
                <Typography variant='h4' className='font-medium mt-6 text-primary'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium'>
                  บาท
                </Typography>
              </div>
              <div className='relative pb-0 -mb-8 ml-6 pr-0'>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardContent>
            <div className='flex justify-between'>
              <div>
                <Typography variant='h5' className='font-medium'>
                  รายได้ของร้าน
                </Typography>
                <Typography variant='h4' className='font-medium mt-6 text-primary'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium'>
                  บาท
                </Typography>
              </div>
              <div className='relative pb-0 -mb-8 ml-6 pr-0'>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader
            title='สถิติลูกค้า'
            subheader={`Total ${revenueData.amount} revenue this month`}
            action={
              <Typography variant='body2' className='text-success'>
                +{revenueData.trend}%
              </Typography>
            }
          />
          <CardContent>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={chartRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type='monotone'
                    dataKey='revenue'
                    stroke='#7367F0'
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type='monotone'
                    dataKey='profit'
                    stroke='#28C76F'
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default Statistics
