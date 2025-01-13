'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Avatar, Card, CardContent, CardHeader, Grid, LinearProgress, Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'
import { revenueData, statCards, tipData } from '@/data/mock/dashboardData'

import ChartData from '@/classes/chart.class'

interface HistoryDetailModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const HistoryDetailModal = ({ isOpen, toggleModal }: HistoryDetailModalProps) => {
  return (
    <div>
      <DynamicModal title='test123' isOpen={isOpen} toggleModal={toggleModal} onSubmit={() => {}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
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
                      คน
                    </Typography>
                  </div>
                  <div className='relative pb-0 pr-0 -mb-8 ml-6 '>
                    <img src='/images/avatars/2.png' alt='Man' height={147} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <div className='flex justify-between'>
                  <div>
                    <Typography variant='h5' className='font-medium'>
                      รายได้ทั้งหมด
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
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
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
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <div className='flex flex-wrap gap-4'>
              {/* Card 1 */}
              {tipData.map((tip, index) => (
                <Card key={index} className='w-full lg:w-[calc(50%-0.5rem)] '>
                  <CardHeader
                    className='pb-2'
                    title={tip.title}
                    action={
                      <Avatar
                        variant='rounded'
                        className='bg-green-500/40 text-green-700'
                        sx={{ width: 35, height: 35 }}
                      >
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
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardHeader title='ยอดขายตามประเภทการชำระเงิน' />
              <CardContent>
                {/* PromptPay Section */}
                <div className='flex justify-between items-center text-lg mb-2 '>
                  <Typography variant='h6'>PromptPay ( พร้อมเพลย์ )</Typography>
                  <span className='bg-green-500 text-white px-2 rounded'>9999999 บาท</span>
                </div>
                <div className='flex justify-between items-center text-sm mb-2'>
                  <Typography>ทั้งหมด 119 รายการ</Typography>
                  <span className='px-2 rounded'>99%</span>
                </div>
                <LinearProgress variant='determinate' value={99} className='h-4 rounded-md' color='primary' />
                {/* TrueMoney Section */}
                <div className='flex justify-between items-center text-lg mb-2 mt-4'>
                  <Typography variant='h6'>TrueMoney Wallet ( ทรูมันนี่วอเลท )</Typography>
                  <span className='bg-green-500 text-white px-2 rounded'>99 บาท</span>
                </div>
                <div className='flex justify-between items-center text-sm mb-2'>
                  <Typography>ทั้งหมด 1 รายการ</Typography>
                  <span className='px-2 rounded'>1%</span>
                </div>
                <LinearProgress variant='determinate' value={2} className='h-4 rounded-md' color='error' />
                {/* Divider */}
                <div className='border-t border-gray-300 my-4'></div>
                {/* Summary Section */}
                <div className='flex justify-between items-center text-lg mt-4 mb-3'>
                  <Typography variant='h5'>รวมทั้งหมด</Typography>
                  <Typography variant='h5'>999999 บาท</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
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
                    <LineChart
                      data={ChartData.generateRevenueData(revenueData)}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
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
      </DynamicModal>
    </div>
  )
}

export default HistoryDetailModal
