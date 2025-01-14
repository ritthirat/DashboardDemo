'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

import { Button, Menu, MenuItem } from '@mui/material'

import { DatePicker } from '@mui/x-date-pickers'

import type { ApexOptions } from 'apexcharts'

// Mock Data Import

// Import icons CSS
import '@/assets/iconify-icons/generated-icons.css'
import VehicleOverview from '@/components/charts/VehicleOverview'

import TotalEarning from '@/components/charts/TotalEarning'

import CardStatsLineAreaCharts from '@/components/statistics/CardStatsLineAreaCharts'
import type { CustomAvatarProps } from '@/@core/components/mui/Avatar'

import type { ThemeColor } from '@/@core/types'
import ApexLineChart from '@/components/apex/ApexLineChart'

// Prepare chart data
interface statsWithAreaChartProps {
  stats: string
  title: string
  chartColor?: ThemeColor
  chartSeries: ApexOptions['series']
  avatarIcon: string
  avatarSize?: number
  avatarColor?: ThemeColor
  avatarSkin?: CustomAvatarProps['skin']
}

const Dashboard = () => {
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

  const statsWithAreaChart: statsWithAreaChartProps[] = [
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

      <Grid item xs={12} sm={12} md={12}>
        <CardStatsLineAreaCharts data={statsWithAreaChart} />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <VehicleOverview />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <ApexLineChart />
      </Grid>
      {/* Statistics Cards */}
      {/* <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <div className='flex'>
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
              <div className='relative pb-0 -mb-8 ml-6'>
                <img src='/images/avatars/2.png' alt='Man' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid> */}

      {/* <Grid item xs={12} sm={8} md={9}>
        <Card>
          <CardHeader title='ภาพรวมการขาย' />
          <CardContent className='flex justify-between mb-5 flex-wrap'>
            {statCards.map((card, index) => (
              <div key={index}>
                <div className=' flex gap-2'>
                  <Avatar variant='rounded' className='bg-primary/10 text-primary' sx={{ width: 44, height: 44 }}>
                    <i className={card.icon} />
                  </Avatar>
                  <div className='flex flex-col'>
                    <Typography variant='h5' className='font-medium'>
                      {card.total}
                    </Typography>
                    <Typography variant='h6' className='font-medium'>
                      {card.title}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid> */}

      {/* <Grid item xs={12} sm={6} md={6}>
        <div className='flex flex-wrap gap-4'>

          {tipData.map((tip, index) => (
            <Card key={index} className='w-full lg:w-[calc(50%-0.5rem)] '>
              <CardHeader
                className='pb-2'
                title={tip.title}
                action={
                  <Avatar variant='rounded' className='bg-green-500/40 text-green-700' sx={{ width: 35, height: 35 }}>
                    <i className={tip.icons} />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant='h6' className='font-medium'>
                  รายได้ทั้งหมด
                </Typography>
                <Typography variant='h5' className='font-medium'>
                  {tip.total} บาท
                </Typography>
                <Typography variant='h5'>จำนวน {tip.items} รายการ</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid> */}
      {/*
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardHeader title='ยอดขายตามประเภทการชำระเงิน' />
          <CardContent>

            <div className='flex justify-between items-center text-lg mb-2 '>
              <Typography variant='h6'>PromptPay ( พร้อมเพลย์ )</Typography>
              <span className='bg-green-500 text-white px-2 rounded'>9999999 บาท</span>
            </div>
            <div className='flex justify-between items-center text-sm mb-2'>
              <Typography>ทั้งหมด 119 รายการ</Typography>
              <span className='px-2 rounded'>99%</span>
            </div>
            <LinearProgress variant='determinate' value={99} className='h-4 rounded-md' color='primary' />

            <div className='flex justify-between items-center text-lg mb-2 mt-4'>
              <Typography variant='h6'>TrueMoney Wallet ( ทรูมันนี่วอเลท )</Typography>
              <span className='bg-green-500 text-white px-2 rounded'>99 บาท</span>
            </div>
            <div className='flex justify-between items-center text-sm mb-2'>
              <Typography>ทั้งหมด 1 รายการ</Typography>
              <span className='px-2 rounded'>1%</span>
            </div>
            <LinearProgress variant='determinate' value={2} className='h-4 rounded-md' color='error' />

            <div className='border-t border-gray-300 my-4'></div>

            <div className='flex justify-between items-center text-lg mt-4 mb-3'>
              <Typography variant='h5'>รวมทั้งหมด</Typography>
              <Typography variant='h5'>999999 บาท</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid> */}

      {/* Revenue Chart */}
      {/* <Grid item xs={12} md={12}>
        <Card>
          <CardHeader
            title='ยอดขาย'
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
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
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

      {/* Recent Activity */}
      {/* <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title='Recent Activity' />
          <CardContent>
            {recentActivity.map(activity => (
              <div key={activity.id} className='flex gap-4 mbe-4'>
                <Avatar src={activity.user.avatar} alt={activity.user.name} />
                <div>
                  <Typography variant='body2'>{activity.title}</Typography>
                  <Typography variant='caption' className='text-textSecondary'>
                    {activity.time}
                  </Typography>
                  {activity.meta?.comment && (
                    <Typography variant='body2' className='text-textSecondary bg-action-hover rounded p-2 mbs-2'>
                      {activity.meta.comment}
                    </Typography>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid> */}

      {/* Recent Transactions */}
      {/* <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Recent Transactions' />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Client</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentTransactions.map(transaction => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <Avatar
                          src={transaction.client.avatar}
                          alt={transaction.client.name}
                          sx={{ width: 34, height: 34 }}
                        />
                        <div>
                          <Typography variant='body2'>{transaction.client.name}</Typography>
                          <Typography variant='caption' className='text-textSecondary'>
                            {transaction.client.company}
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant='body2'
                        className={transaction.type === 'credit' ? 'text-success' : 'text-error'}
                      >
                        {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        size='small'
                        label={transaction.status}
                        color={
                          transaction.status === 'confirmed'
                            ? 'success'
                            : transaction.status === 'pending'
                              ? 'warning'
                              : 'error'
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid> */}

      {/* Active Projects */}
      {/* <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Active Projects' />
          <CardContent>
            {projects.map(project => (
              <div key={project.id} className='mbe-6'>
                <div className='flex justify-between items-center mbe-2'>
                  <div>
                    <Typography variant='body2'>{project.name}</Typography>
                    <Typography variant='caption' className='text-textSecondary'>
                      Due: {project.deadline}
                    </Typography>
                  </div>
                  <Chip
                    size='small'
                    label={project.status}
                    color={
                      project.status === 'completed' ? 'success' : project.status === 'active' ? 'primary' : 'error'
                    }
                  />
                </div>
                <div className='flex justify-between items-center mbe-2'>
                  <div className='flex -mis-2'>
                    {project.assigned.map((member, index) => (
                      <Avatar
                        key={index}
                        src={member.avatar}
                        alt={member.name}
                        sx={{ width: 32, height: 32, marginInlineStart: -1 }}
                      />
                    ))}
                  </div>
                  <Typography variant='caption'>{project.progress}%</Typography>
                </div>
                <LinearProgress
                  variant='determinate'
                  value={project.progress}
                  color={project.status === 'completed' ? 'success' : project.status === 'active' ? 'primary' : 'error'}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default Dashboard
