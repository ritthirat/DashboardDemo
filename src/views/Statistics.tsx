// MUI Imports
'use client'
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { reportCustomerByDay, revenueData } from '@/data/mock/dashboardData'
import CustomerBarChart from '@/components/CustomerBarChart'
import ChartData from '@/classes/chart.class'

const chartData = ChartData.generateCustomerByDay(reportCustomerByDay)

const chartRevenueData = ChartData.generateRevenueData(revenueData)

const Statistics = () => {
  const themeColor = useTheme()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4} lg={4}>
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
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <Card>
          <CardHeader title='รายงายลูกค้า' />
          <CardContent>
            <CustomerBarChart data={chartData} themeColor={themeColor} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} className='flex justify-end gap-2'>
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
      </Grid>
    </Grid>
  )
}

export default Statistics
