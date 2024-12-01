'use client'

// React Imports

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// Recharts Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock Data Import
import { statCards, revenueData, recentTransactions, projects, recentActivity } from '@/data/mock/dashboardData'

// Import icons CSS
import '@/assets/iconify-icons/generated-icons.css'

// Prepare chart data
const chartData = Array(12)
  .fill(0)
  .map((_, index) => ({
    name: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index],
    revenue: revenueData.series[0].data[index],
    profit: revenueData.series[1].data[index]
  }))

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      {/* Statistics Cards */}
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <div className='flex'>
              <div>
                <Typography variant='h6' className='font-medium'>
                  รายได้ของร้าน
                </Typography>
                <Typography variant='h5' className='font-medium mt-6'>
                  999999
                </Typography>
                <Typography variant='h6' className='font-medium mb-8'>
                  บาท
                </Typography>
              </div>
              <div className='relative pb-0 mb-[-30px] ml-6'>
                <img src='/images/avatars/2.png ' height={147} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={8} md={9}>
        <Card>
          <CardContent className='flex justify-between'>
            {statCards.map((card, index) => (
              <div key={index}>
                <Typography variant='h6' className='font-medium'>
                  {card.title}
                </Typography>
                <Typography variant='h5' className='font-medium mbs-2'>
                  {card.stats}
                </Typography>
                <Typography variant='body2' className={`text-${card.trend.color}`}>
                  <i className={`${card.icon} me-1`} />
                  {card.trend.amount}
                </Typography>

                <Avatar variant='rounded' className='bg-primary/10 text-primary' sx={{ width: 44, height: 44 }}>
                  <i className={card.icon} />
                </Avatar>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>

      {/* Revenue Chart */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader
            title='Revenue Overview'
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
      </Grid>

      {/* Recent Activity */}
      <Grid item xs={12} md={4}>
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
      </Grid>

      {/* Recent Transactions */}
      <Grid item xs={12} md={6}>
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
      </Grid>

      {/* Active Projects */}
      <Grid item xs={12} md={6}>
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
      </Grid>
    </Grid>
  )
}

export default Dashboard
