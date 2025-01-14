'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
// eslint-disable-next-line import/no-unresolved
import styles from './styles.module.css'

import tableStyles from '@core/styles/table.module.css'

type dataTypes = {
  icon: string
  heading: string
  list: string
  progressColor: string
  progressColorVariant: string
  progressData: string
  widthClass?: string
}

const data: dataTypes[] = [
  {
    icon: 'tabler-photo',
    heading: 'รูปภาพ',
    list: '1',
    progressColor: 'action',
    progressColorVariant: 'hover',
    progressData: '100'
  },
  {
    icon: 'tabler-video',
    heading: 'วิดีโอ',
    list: '10',
    progressColor: 'primary',
    progressColorVariant: 'main',
    progressData: '400'
  },
  {
    icon: 'tabler-message-2',
    heading: 'ข้อความ',
    list: '13',
    progressColor: 'info',
    progressColorVariant: 'main',
    progressData: '130'
  },
  {
    icon: 'tabler-coins',
    heading: 'ทิป',
    list: '45',
    progressColor: 'SnackbarContent',
    progressColorVariant: 'bg',
    progressData: '200'
  }
]

const totalProgress = data.reduce((sum, item) => sum + parseFloat(item.progressData), 0)
const maxTotalPercent = 100

const updatedData: dataTypes[] = data.map(item => ({
  ...item,
  widthClass: `is-[${((parseFloat(item.progressData) / totalProgress) * maxTotalPercent).toFixed(1)}%]`
}))

console.log('updatedData:', updatedData)

const VehicleOverview = () => {
  return (
    <Card>
      <CardHeader title='รายได้ตามประเภทการขาย' action={<OptionMenu options={['Refresh', 'Update', 'Share']} />} />
      <CardContent>
        <div className='flex flex-col gap-6'>
          <div className='flex is-full'>
            {updatedData.map((item, index) => (
              <div
                key={index}
                style={{ width: `${((parseFloat(item.progressData) / totalProgress) * maxTotalPercent).toFixed(1)}%` }}
                className={`flex flex-col gap-[38px] relative ${styles.linearRound}`}
              >
                <Typography className={classnames(styles.header, 'relative max-sm:hidden')}>{item.heading}</Typography>
                <LinearProgress
                  variant='determinate'
                  value={-1}
                  className={classnames('bs-[46px]')}
                  // eslint-disable-next-line lines-around-comment
                  // @ts-ignore
                  sx={{
                    backgroundColor: `var(--mui-palette-${item.progressColor}-${item.progressColorVariant})`,
                    borderRadius: 0
                  }}
                />
                <Typography
                  variant='body2'
                  className='absolute bottom-3 start-2 font-medium'
                  sx={{
                    color: theme =>
                      index === 0
                        ? 'var(--mui-palette-text-primary)'
                        : item.progressColor === 'info'
                          ? 'var(--mui-palette-common-white)'
                          : // eslint-disable-next-line lines-around-comment
                            // @ts-ignore
                            theme.palette.getContrastText(theme.palette[item.progressColor][item.progressColorVariant])
                  }}
                >
                  {item.progressData}
                </Typography>
              </div>
            ))}
          </div>
          <div>
            <Typography variant='body1'>ประเภทรายการ</Typography>
          </div>
          <div className='overflow-x-auto'>
            <table className={tableStyles.table}>
              <thead className='font-bold'>
                <th className='text-start  font-bold'>ประเภทรายการ</th>
                <th className='text-end p-0 font-bold'>รายการ</th>
                <th className='text-end p-0 font-bold'>รายได้</th>
              </thead>
              <tbody>
                {updatedData.map((item, index) => (
                  <tr key={index}>
                    <td className='flex items-center gap-2 pis-0'>
                      <i className={classnames(item.icon, 'text-textPrimary text-[1.5rem]')}></i>
                      <Typography color='text.primary'>{item.heading}</Typography>
                    </td>
                    <td className='text-end'>
                      <Typography color='text.primary' className='font-medium'>
                        {item.list}
                      </Typography>
                    </td>
                    <td className='text-end pie-0'>
                      <Typography>{item.progressData}</Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default VehicleOverview
