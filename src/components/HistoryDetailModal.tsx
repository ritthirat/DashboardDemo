'use client'

import { Grid } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'

import ApexLineChart from './apex/ApexLineChart'
import TotalEarning from './charts/TotalEarning'
import VehicleOverview from './charts/VehicleOverview'
import CardStatsLineAreaCharts from './statistics/CardStatsLineAreaCharts'
import type { CardStatsWithAreaChartProps } from '@/types/widgetTypes'

interface HistoryDetailModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const HistoryDetailModal = ({ isOpen, toggleModal }: HistoryDetailModalProps) => {
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
    <div>
      <DynamicModal title='test123' isOpen={isOpen} toggleModal={toggleModal} onSubmit={() => {}}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12}>
            <CardStatsLineAreaCharts data={statsWithAreaChart} gridSizes={{ xs: 12, sm: 6, md: 6 }} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <VehicleOverview />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TotalEarning />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ApexLineChart />
          </Grid>
        </Grid>
      </DynamicModal>
    </div>
  )
}

export default HistoryDetailModal
